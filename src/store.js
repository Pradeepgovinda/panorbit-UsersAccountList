import { createStore } from 'redux'
import { user_reducer } from './reducer'

export const store = createStore(user_reducer)


