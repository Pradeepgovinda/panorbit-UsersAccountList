export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export function setCurrentUser (data) {
    return {
        type: SET_CURRENT_USER,
        data
    }

}