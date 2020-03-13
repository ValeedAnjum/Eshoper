import {ASYNCHRONOUS_START,ASYNCHRONOUS_SUCCESS,ASYNCHRONOUS_ERROR} from '../Constants/AuthConstants';
const iniState = {
    modelName:null
};

export const AuthReducer = (state = iniState,action) => {
    switch (action.type) {
        case ASYNCHRONOUS_START:
            return {...state,modelName:'Loader'}
        case ASYNCHRONOUS_SUCCESS:
            return {...state,modelName:null}
        case ASYNCHRONOUS_ERROR:
            return {...state,modelName:null}
        default:
            return state;
    }
}