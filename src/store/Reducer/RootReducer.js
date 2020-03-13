import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import {reducer as formReducer} from 'redux-form';
import { ItemReducer } from './ItemsReducer';
import { CartReducer } from './CartReducer';
import { AuthReducer } from './AuthReducer';

export const Reducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    form:formReducer,
    items:ItemReducer,
    cart:CartReducer,
    auth:AuthReducer
});