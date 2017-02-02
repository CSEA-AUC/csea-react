import {createRequestTypes, action} from './helpers'

export const NOTES = createRequestTypes('NOTE');

// Needs to take into account course requested
// maybe add to params to accomodate other filtering fields?
export const notes = {
    request: () => action(NOTES.REQUEST),
    success: (notes, responseCode) => action(NOTES.SUCCESS, {notes, responseCode}),
    failure: (error) => action(NOTES.FAILURE, {errorCode})
};


export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = () => action(LOAD_NOTES);
