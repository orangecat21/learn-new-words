import { ADD_USER } from "./actionTypes"

export const addUserAction = (user) => {
    return {
        type: ADD_USER,
        user
    }
}