import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer
})

//Need to replace reducers with useState and useContext