import * as types from '../actions/notes'

// Change currentNotes to notesbycourse
const initialState = {
    notesByCourse: {},
    selectedCourse: '',
    availableCourses: {
        isFetching: true,
        responseCode: null,
        results: []
    }
};

function notes(state = initialState, action) {
    switch (action.type) {
        case types.SELECT_COURSE:
            return {...state, notesByCourse: action.courseName};

        case types.NOTES.REQUEST:
        case types.NOTES.SUCCESS:
        case types.NOTES.FAILURE:
            return {...state, notesByCourse: notesByCourseReducer(state.notesByCourse, action)};

        case types.COURSES.REQUEST:
        case types.COURSES.SUCCESS:
        case types.COURSES.FAILURE:
            return {...state, availableCourses: availableCoursesReducer(state.availableCourses, action)}
    }
    return state
}

function notesByCourseReducer(state=initialState, action) {
    switch(action.type) {
        case types.NOTES.REQUEST:
            return {...state, [action.courseName]: {
                isFetching: true,
                responseCode: null
            }};
        case types.NOTES.SUCCESS:
            return {...state, [action.courseName]: {
                isFetching: false,
                responseCode: action.responseCode,
                results: action.notes
            }};
        case types.NOTES.FAILURE:
            return {...state, [action.courseName]: {
                isFetching: false,
                responseCode: action.errorCode,
            }}
    }
}
function availableCoursesReducer(state = initialState, action) {
    switch (action.type) {
        case types.COURSES.REQUEST:
            return {
                ...state,
                isFetching: true, responseCode: null
            };
        case types.COURSES.SUCCESS:
            return {
                ...state,
                isFetching: false, responseCode: action.responseCode,
                results: action.courses
            };

        case types.COURSES.FAILURE:
            return {
                ...state,
                isFetching: false, responseCode: action.errorCode
            }
    }
    return state;
}

export default notes
