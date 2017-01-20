import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import createSagaMiddleware, {END} from 'redux-saga'

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let store = null;

// For redux-devtools chrome extension
if (__DEVTOOLS__)
    store = createStore(
        reducers,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
else
    store = createStore(
        reducers,
        compose(applyMiddleware(sagaMiddleware))
    );

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
store.runSaga(rootSaga);

export default store;