import * as types from '../actions/alexa'

const initialState = {
    joinGroupModal: {
        show: false,
        isPosting: false,
        responseCode: null,
    },
    createGroupModal: {
        show: false,
        isPosting: false,
        responseCode: null,
    },
    alexaGroups: {
        isFetching: true,
        responseCode: null,
        results: []
    },
};

function alexa(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_GROUP_CREATE_MODAL:
        case types.HIDE_GROUP_CREATE_MODAL:
        case types.CREATE_ALEXAGROUP.REQUEST:
        case types.CREATE_ALEXAGROUP.SUCCESS:
        case types.CREATE_ALEXAGROUP.FAILURE:
            return {...state, createGroupModal: createGroupReducers(state.createGroupModal, action)};
        case types.SHOW_GROUP_JOIN_MODAL:
        case types.HIDE_GROUP_JOIN_MODAL:
        case types.JOIN_ALEXAGROUP.REQUEST:
        case types.JOIN_ALEXAGROUP.SUCCESS:
        case types.JOIN_ALEXAGROUP.FAILURE:
            return {...state, joinGroupModal: joinGroupReducer(state.joinGroupModal, action)};
        case types.LOAD_ALEXAGROUPS.REQUEST:
        case types.LOAD_ALEXAGROUPS.SUCCESS:
        case types.LOAD_ALEXAGROUPS.FAILURE:
            return {...state, alexaGroups: alexaGroupsReducer(state.alexaGroups, action)};
    }
    return state
}

function createGroupReducers(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_GROUP_CREATE_MODAL:
            return {...state, show: true};
        case types.HIDE_GROUP_CREATE_MODAL:
            return {...state, show: false};
        case types.CREATE_ALEXAGROUP.REQUEST:
            return {...state, isPosting: true, responseCode: null};
        case types.CREATE_ALEXAGROUP.SUCCESS:
            return {...state, isPosting: false, responseCode: action.responseCode};
        case types.CREATE_ALEXAGROUP.FAILURE:
            return {...state, isPosting: false, responseCode: action.errorCode};
    }
}

function joinGroupReducer(state = initialState, action) {
    switch(action.type) {
        case types.SHOW_GROUP_JOIN_MODAL:
            return {...state, show: true};
        case types.HIDE_GROUP_JOIN_MODAL:
            return {...state, show: false};
        case types.JOIN_ALEXAGROUP.REQUEST:
            return {...state, isPosting: true, responseCode: null};
        case types.JOIN_ALEXAGROUP.SUCCESS:
            return {...state, isPosting: false, responseCode: action.responseCode};
        case types.JOIN_ALEXAGROUP.FAILURE:
            return {...state, isPosting: false, responseCode: action.errorCode};
    }
}

function alexaGroupsReducer(state = initialState, action) {
    switch(action.type){
        case types.LOAD_ALEXAGROUPS.REQUEST:
            return {...state, isFetching: true, responseCode: null, results: []};
        case types.LOAD_ALEXAGROUPS.SUCCESS:
            return {...state, isFetching: false, responseCode: action.responseCode, results: action.groups};
        case types.LOAD_ALEXAGROUPS.FAILURE:
            return {...state, isFetching: false, responseCode: action.errorCode}
    }

}

export default alexa
