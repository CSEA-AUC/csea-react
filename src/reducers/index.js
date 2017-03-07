import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form'

import blog from './blog'
import notes from './notes'
import alexa from './alexa'

export default combineReducers({
    blog,
    notes,
    alexa,
    routing: routerReducer,
    form: formReducer
})