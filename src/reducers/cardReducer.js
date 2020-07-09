import { FETCH_CRAD_LIST, FETCH_CRAD_LIST_RESOLVED, FETCH_CRAD_LIST_REJECTED, REMOVE_CARD_LIST } from "../actions/actionTypes";

const cardReducer = (state = { items: [], err: null, isLoading: false }, action) => {
    switch(action.type) {
        case FETCH_CRAD_LIST:
            return {
                items: [],
                err: null,
                isLoading: true,
            };

        case FETCH_CRAD_LIST_RESOLVED:
            return {
                err:null,
                items: action.payload,
                isLoading: false,
            }
        
        case FETCH_CRAD_LIST_REJECTED:
            return {
                items: [],
                err: action.payload,
                isLoading: false,
            };

        case REMOVE_CARD_LIST: 
            return {
                items: [],
                err: null,
                isLoading: false,
            };

        default:
            return state;
    }
}

export default cardReducer;