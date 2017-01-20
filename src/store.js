import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware, { END } from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

let store = null;

// For redux-devtools chrome extension
if (__DEVTOOLS__)
    store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
else
    store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    );

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);

export default store;