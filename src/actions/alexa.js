import {createRequestTypes, action} from './helpers'

export const LOAD_ALEXAGROUPS = createRequestTypes('LOAD_ALEXAGROUPS');

// Needs to take into account course requested
// maybe add to params to accommodate other filtering fields?
export const loadAlexaGroups = {
    request: () => action(LOAD_ALEXAGROUPS.REQUEST),
    success: (groups, responseCode) => action(LOAD_ALEXAGROUPS.SUCCESS, {groups, responseCode}),
    failure: (groups, errorCode) => action(LOAD_ALEXAGROUPS.FAILURE, {groups, errorCode})
};


export const LOAD_ALEXAGROUPS_SAGA = 'LOAD_ALEXAGROUPS';
export const loadAlexaGroupsSaga = () => action(LOAD_ALEXAGROUPS_SAGA);

export const JOIN_ALEXAGROUP = createRequestTypes('JOIN_ALEXAGROUP');

export const joinAlexaGroup = {
    request: () => action(JOIN_ALEXAGROUP.REQUEST),
    success: (responseCode) => action(JOIN_ALEXAGROUP.SUCCESS, {responseCode}),
    failure: (errorCode) => action(JOIN_ALEXAGROUP.FAILURE, {errorCode})
};

export const JOIN_ALEXAGROUP_SAGA = 'JOIN_ALEXAGROUP_SAGA';
export const joinAlexaGroupSaga = () => action(JOIN_ALEXAGROUP_SAGA);

export const CREATE_ALEXAGROUP = createRequestTypes('CREATE_ALEXAGROUP');

export const createAlexaGroup = {
    request: () => action(CREATE_ALEXAGROUP.REQUEST),
    success: (responseCode) => action(CREATE_ALEXAGROUP.SUCCESS, {responseCode}),
    failure: (errorCode) => action(CREATE_ALEXAGROUP.FAILURE, {errorCode})
};

export const CREATE_ALEXAGROUP_SAGA = 'CREATE_ALEXAGROUP_SAGA';
export const createAlexaGroupSaga = action(CREATE_ALEXAGROUP_SAGA);

export const SHOW_GROUP_CREATE_MODAL = 'SHOW_GROUP_CREATE_MODAL';
export const showGroupCreateModal = () => action(SHOW_GROUP_CREATE_MODAL);

export const SHOW_GROUP_JOIN_MODAL = 'SHOW_GROUP_JOIN_MODAL';
export const showGroupJoinModal = () => action(SHOW_GROUP_JOIN_MODAL);

export const HIDE_GROUP_CREATE_MODAL = 'HIDE_GROUP_CREATE_MODAL';
export const hideGroupCreateModal = () => action(HIDE_GROUP_CREATE_MODAL);

export const HIDE_GROUP_JOIN_MODAL = 'HIDE_GROUP_JOIN_MODAL';
export const hideGroupJoinModal = () => action(HIDE_GROUP_JOIN_MODAL);

