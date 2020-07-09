import { combineReducers } from 'redux';
import userReducer from './userReduser';
import cardReducer from './cardReducer';

export default combineReducers({
    user: userReducer,
    cardList: cardReducer,
})