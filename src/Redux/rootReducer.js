// combine all the reducers here and export it
import {combineReducers} from 'redux'
import authReducers from './Reducers/authReducers';
import loaderReducers from './Reducers/loaderReducers';
import meetingsReducers from './Reducers/meetingReducers';

export default combineReducers({
    authReducers,loaderReducers,meetingsReducers
})