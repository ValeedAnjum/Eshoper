const initState = {
    items:[],
    detailOfItem:null,
    loadingError:null,
    loading:false,
    searchByName:undefined
}

export const ItemReducer = (state = initState,action) => {
    switch (action.type) {
        case 'ItemsFetchStart':
            return {...state,loading:true}
        case 'ItemsFetchEnd':
            return {...state,items:action.payload,loading:false}
        case 'ItemsEmpty':
            return {...state,loading:false}
        case 'ItemsReset':
            return {...state,items:action.payload}
        case 'DetailItemFetchStart':
            return {...state,loading:true}
        case 'DetailItemFetchEnd':
            return {...state,detailOfItem:action.payload,loading:false}
        case 'DetailItemFetchError':
            return {...state,loading:false,loadingError:action.payload}
        case 'SearchByNameSet':
            return {...state,searchByName:action.payload}
        case 'SearchByNameReSet':
                return {...state,searchByName:action.payload}
        default:
            return state;
    }
}