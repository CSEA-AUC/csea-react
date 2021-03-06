import {takeEvery, put, call, fork} from 'redux-saga/effects'
import * as actions from '../actions/alexa'
import * as api from '../utils/api'


// Load Alexa Groups Saga
function* loadAlexaGroupsSaga(action) {
    try {
        // load list of available courses
        yield put(actions.loadAlexaGroups.request());

        let apiData = yield call(api.fetchResource, 'alexa/groups/');
        yield put(actions.loadAlexaGroups.success(apiData.data, apiData.status));
    }

    catch (error) {
        yield put(actions.loadAlexaGroups.failure(error.response.status));
    }
}

function* watchLoadAlexaGroups() {
    yield takeEvery(actions.LOAD_ALEXAGROUPS_SAGA, loadAlexaGroupsSaga);
}

// Create Alexa Group Saga
function* createAlexaGroupeSaga(action) {
    try {
        yield put(actions.createAlexaGroup.request());
        const apiData = yield call(api.postForm, 'alexa/groups/', action.formData);
        console.log(apiData);
        yield put(actions.createAlexaGroup.success(apiData.status));
        yield put(actions.loadAlexaGroupsSaga());
    }
    catch (error) {
        yield put(actions.createAlexaGroup.failure(error.response.status));
    }
}

function* watchCreateAlexaGroup() {
    yield takeEvery(actions.CREATE_ALEXAGROUP_SAGA, createAlexaGroupeSaga);
}

// Join Alexa Groups Saga
function* joinAlexaGroupSaga(action) {
    try {
        yield put(actions.joinAlexaGroup.request());
        const apiData = yield call(api.postForm, 'alexa/groups/' + action.uid + '/', action.formData);
        yield put(actions.joinAlexaGroup.success(apiData.status));
    }
    catch (error) {
        yield put(actions.joinAlexaGroup.failure(error.response.status));
    }
}

function* watchJoinAlexaGroup() {
    yield takeEvery(actions.JOIN_ALEXAGROUP_SAGA, joinAlexaGroupSaga);
}


// Alexa Saga
export default function* noteSaga() {
    yield [
        fork(watchLoadAlexaGroups),
        fork(watchCreateAlexaGroup),
        fork(watchJoinAlexaGroup),
    ]
}