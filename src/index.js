import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'placeholder-loading/dist/css/placeholder-loading.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase';
import {getFirestore,reduxFirestore} from 'redux-firestore';
import {Provider} from 'react-redux';
import {Reducer} from './store/Reducer/RootReducer';
import config from './config/config';
import Loader from './components/ModelManager/Loader/Loader';
const store = createStore(Reducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(config,{attachAuthIsReady:true,useFirestoreForProfile:true,userProfile:'users'}),
    reduxFirestore(config)
));

ReactDOM.render(<Loader/>, document.getElementById('root'));
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

