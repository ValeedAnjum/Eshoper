export const Login = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const {email,password} = cred;
        const firebase = getFirebase();
        dispatch({type:'AsynchronousStart'});
        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        ).then(() => {
            console.log('Success');
            dispatch({type:'AsynchronousSuccess'});
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
            dispatch({type:'AsynchronousError',payload:err.message});
        })
    }
}

export const Register = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const {name,email,password} = cred;
        const firebase = getFirebase();
        const firestore = getFirestore();
        dispatch({type:'AsynchronousStart'});
        firebase.auth().createUserWithEmailAndPassword(
            email,password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                name:name
            })
        }).then(() => {
            console.log('Success');
            dispatch({type:'AsynchronousSuccess'});
        }).catch(err => {
            alert(err.message);
            dispatch({type:'AsynchronousError'});
        })
    }
}

export const Logout = () => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            console.log('Success');
        }).catch(err => {
            console.log('Error');
        })
    }
}