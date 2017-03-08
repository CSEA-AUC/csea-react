import {SubmissionError} from 'redux-form'

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
    return postForm('alexa/groups/', values)
        .then((response) => dispatch(hideGroupJoinModal()))
        .catch((error) => {
            throw new SubmissionError({...error.response.data, _error: 'Failed to join group'})
        })
}

export default {submitCreateGroupForm, submitJoinGroupForm}