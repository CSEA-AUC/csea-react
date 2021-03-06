import {SubmissionError} from 'redux-form'
import store from '../store'
import {postForm} from './api'
import {hideGroupCreateModal, hideGroupJoinModal} from '../actions/alexa'

function submitCreateGroupForm(values, dispatch) {
    return postForm('alexa/groups/', values)
        .then((response) => dispatch(hideGroupCreateModal()))
        .catch((error) => {
            throw new SubmissionError({...error.response.data, _error: 'Group Creation Failed'})
        })
}

function submitJoinGroupForm(values, dispatch) {
    const groupId = store.getState().alexa.joinGroupModal.groupId;
    return postForm('alexa/groups/' + groupId + '/', values)
        .then((response) => dispatch(hideGroupJoinModal()))
        .catch((error) => {
            throw new SubmissionError({...error.response.data, _error: 'Failed to join group'})
        })
}

export {submitCreateGroupForm, submitJoinGroupForm}