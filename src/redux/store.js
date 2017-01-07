import {createStore} from 'redux'
import reducers from './modules/reducer'

let store = null;

// For redux-devtools chrome extension
if (__DEVTOOLS__)
    store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
else
    store = createStore(reducers);

export default store;