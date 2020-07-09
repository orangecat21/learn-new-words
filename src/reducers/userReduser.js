import { ADD_USER } from "../actions/actionTypes";

const userReduser = (state = {}, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.user,
                userUid: action.user.uid,
                name: action.user.displayName,
            };

        default: 
            return state;
    }
}

export default userReduser;