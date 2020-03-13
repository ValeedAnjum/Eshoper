import * as UserAct from '../Constants/UserConstants';
const initState = {
    items:[],
    detailOfItem:null,
    loadingError:null,
    loading:false,
    searchByName:undefined
}

export const ItemReducer = (state = initState,action) => {
    switch (action.type) {
        case UserAct.ITEMS_FETCH_START:
            return {...state,loading:true}
        case UserAct.ITEMS_FETCH_END:
            return {...state,items:action.payload,loading:false}
        case UserAct.ITEMS_FETCH_EMPTY:
            return {...state,loading:false}
        case 'ItemsReset':
            return {...state,items:action.payload}
        case UserAct.DETAIL_ITEM_FETCH_START:
            return {...state,loading:true}
        case UserAct.DETAIL_ITEM_FETCH_END:
            return {...state,detailOfItem:action.payload,loading:false}
        case UserAct.DETAIL_ITEM_FETCH_ERROR:
            return {...state,loading:false,loadingError:action.payload}
        case UserAct.SEARCH_BY_NAME_SET:
            return {...state,searchByName:action.payload}
        case UserAct.SEARCH_BY_NAME_RESET:
                return {...state,searchByName:action.payload}
        default:
            return state;
    }
}