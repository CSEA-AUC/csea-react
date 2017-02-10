import * as types from '../actions/notes'

// Change currentNotes to notesbycourse
const initialState = {
    notesByCourse: {
        isFetching: true,
        responseCode: null
    },
    selectedCourse: '',
    availableCourses: []
};

function notes(state = initialState, action) {
    switch (action.type) {
        case types.NOTES.REQUEST:
            return {...state, currentNotes: {isFetching: true, responseCode: null}};
        case types.NOTES.SUCCESS:
            return {
                ...state,
                currentNotes: {results: action.notes, isFetching: false, responseCode: action.responseCode}
            };
        case types.NOTES.FAILURE:
            return {...state, currentNotes: {isFetching: false, responseCode: action.errorCode}};
        case types.SELECT_COURSE:
            return {...state, selectedCourse: action.courseName};
        case types.LOAD_AVAIL_COURSES:
            return {...state, availableCourses: action.courses}
    }
    return state
}

export default notes
