import {combineReducers} from 'redux'
import { prevReducer } from './prevReducer'

export const rootReducer = combineReducers({
    slides : prevReducer
})