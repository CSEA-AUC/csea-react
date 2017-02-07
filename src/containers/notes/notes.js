import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {Banner, Spinner} from '../../components'
import Download from 'react-icons/lib/fa/download'
import {loadNotes}from '../../actions/notes'

import moment from 'moment'

import styles from './notes.scss'

class Notes extends Component {
    componentWillMount() {
        this.props.loadNotes();
    }

    createNote(note) {
        const semesterDict = {
            'SP': 'Spring',
            'WT': 'Winter',
            'SM': 'Summer',
            'FL': 'Fall'
        };
        const course_identifier = `${note.course_prefix} ${note.course_three_digits}/${note.course_four_digits}`;
        const timestamp = moment(note.created).format('D MMM YYYY');
        return (
            <li key={note.id} className={styles.note}>
                <header>
                    <h3>{note.course_title}</h3>
                    <h3>{course_identifier}</h3>
                    <div className={styles.courseMeta}>
                        <div className={styles.courseProf}>Dr. {note.professor}</div>
                        <div className={styles.courseDate}><em>{semesterDict[note.semester] + ' ' + note.year}</em></div>
                    </div>
                </header>
                <section className={styles.noteComment}>
                    {note.note_comment}
                </section>
                <footer>
                    <div className={styles.noteMeta}>
                        <div className={styles.noteAuthor}>{note.author}</div>
                        <div className={styles.noteCreated}>{timestamp}</div>
                    </div>
                    <div className={styles.downloadButtonWrapper}>
                        <div className={styles.downloadButton}>
                            <a href={note.note}><Download/></a>
                        </div>
                    </div>
                </footer>
            </li>
        )
    }

    render() {
        const notes = this.props.currentNotes || {isFetching: true, responseCode: null};
        const isFetching = notes.isFetching;
        return (
            <div>
                <Banner
                    title="Notes"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                    className={styles.banner}
                />
                <section className={'container ' + styles.mainWrapper}>
                    <h2>Latest Announcements</h2>
                    {isFetching ? <Spinner/> :
                        <ul className={styles.notesList}>
                            {notes.results.map(this.createNote)}
                            {notes.results.map(this.createNote)}
                            {notes.results.map(this.createNote)}
                            {notes.results.map(this.createNote)}
                            {notes.results.map(this.createNote)}
                        </ul>
                    }
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {currentNotes, selectedCourse} = state.notes;
    return {currentNotes, selectedCourse}
}

function mapDispatchToProps(dispatch) {
    return {
        loadNotes: () =>
            dispatch(loadNotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
