import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import {reducer as formReducer} from 'redux-form';

export const Reducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    form:formReducer
});