import {take, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../redux/actions'

// Subroutines

function* loadPostList(url, pageNum) {

}

// Watchers
function* watchLoadPostsList(){
    while(true) {
        const what = yield take(actions.LOAD_POST_LIST);
        yield console.log(what);
    }
}

// Root saga
export default function* root() {
    yield [
        fork(watchLoadPostsList)
    ]
}

