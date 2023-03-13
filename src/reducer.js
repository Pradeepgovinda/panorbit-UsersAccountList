import { SET_CURRENT_USER } from "./action"

const initial_state = {
    current_user : {}
}

export const user_reducer = (state= initial_state, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
          return {
            ...state, 
            current_user: action.data
          }
        default:
          return state
}
}