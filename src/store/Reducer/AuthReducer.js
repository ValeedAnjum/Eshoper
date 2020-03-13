const iniState = {
    modelName:null
}

export const AuthReducer = (state = iniState,action) => {
    switch (action.type) {
        case 'AsynchronousStart':
            return {...state,modelName:'Loader'}
        case 'AsynchronousSuccess':
            return {...state,modelName:null}
        case 'AsynchronousError':
            return {...state,modelName:null}
        default:
            return state;
    }
}