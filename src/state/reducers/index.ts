import bankReducer from './/bankReducer'
import { combineReducers } from 'redux'


const  reducer= combineReducers({
    bank:bankReducer
    
})
export default reducer
export type State=ReturnType<typeof reducer>

