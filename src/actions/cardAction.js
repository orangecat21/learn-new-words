import { FETCH_CRAD_LIST, FETCH_CRAD_LIST_RESOLVED, FETCH_CRAD_LIST_REJECTED, REMOVE_CARD_LIST } from "./actionTypes";

export const fetchCard = (getData) => {
    return (dispatch) => {
        dispatch(fetchCardList());
        getData().on('value', res => {
            const arr = Object.values(res.val() || {});
            dispatch(fetchCardListResolved(arr));
        }, err => dispatch(fetchCardListRejected(err)));
    }
}

export const fetchCardList = () => {
    return {
        type: FETCH_CRAD_LIST,
    }
}

export const fetchCardListResolved = (payload) => {
    return {
        type: FETCH_CRAD_LIST_RESOLVED,
        payload,
    }
}

export const fetchCardListRejected = (payload) => {
    return {
        type: FETCH_CRAD_LIST_REJECTED,
        payload,
    }
}

export const removeCardList = () => {
    return {
        type: REMOVE_CARD_LIST,
    }
}