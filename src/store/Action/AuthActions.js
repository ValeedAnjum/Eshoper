import {ASYNCHRONOUS_START,ASYNCHRONOUS_SUCCESS,ASYNCHRONOUS_ERROR} from '../Constants/AuthConstants';

export const Login = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const {email,password} = cred;
        const firebase = getFirebase();
        dispatch({type:ASYNCHRONOUS_START});
        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        ).then(() => {
            dispatch({type:ASYNCHRONOUS_SUCCESS});
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
            dispatch({type:ASYNCHRONOUS_ERROR,payload:err.message});
        })
    }
}

export const Register = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const {name,email,password} = cred;
        const firebase = getFirebase();
        const firestore = getFirestore();
        dispatch({type:ASYNCHRONOUS_START});
        firebase.auth().createUserWithEmailAndPassword(
            email,password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                name:name
            })
        }).then(() => {
            console.log('Success');
            dispatch({type:ASYNCHRONOUS_SUCCESS});
        }).catch(err => {
            alert(err.message);
            dispatch({type:ASYNCHRONOUS_ERROR});
        })
    }
}

export const Logout = () => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            console.log('Success');
        }).catch(err => {
            console.log('Error',err.message);
        })
    }
}