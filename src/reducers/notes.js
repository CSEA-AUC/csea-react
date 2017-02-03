import * as types from '../actions/notes'

// Change currentNotes to notesbycourse
const initialState = {
    currentNotes: {},
    selectedCourse: ''
};

function notes(state=initialState, action) {
    switch(action.type) {
        case types.NOTES.REQUEST:
            return {...state, currentNotes: {isFetching: true, responseCode: null}};
        case types.NOTES.SUCCESS:
            return {...state, currentNotes: {...action.notes, isFetching: false, responseCode: action.responseCode}};
        case types.NOTES.FAILURE:
            return {...state, currentNotes: {isFetching: false, responseCode: action.errorCode}};
    }
    return state
}

export default notes
