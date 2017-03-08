import {SubmissionError} from 'redux-form'

import {postForm} from './api'
import {hideGroupCreateModal} from '../actions/alexa'

function submitCreateGroupForm(values, dispatch) {
    return postForm('alexa/groups/', values)
        .then((response) => dispatch(hideGroupCreateModal()))
        .catch((error) => {
            throw new SubmissionError({...error.response.data, _error: 'Group Creation Failed'})
        })
}

export default submitCreateGroupForm