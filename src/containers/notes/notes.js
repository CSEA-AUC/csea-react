import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, ControlLabel, FormControl, Form} from 'react-bootstrap'

import {Banner, Spinner} from '../../components'
import DownloadIcon from 'react-icons/lib/fa/download'
import UserIcon from 'react-icons/lib/fa/user'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import {loadNotes, selectCourse}from '../../actions/notes'

import moment from 'moment'

import styles from './notes.scss'

class Notes extends Component {
    constructor(props) {
        super(props);

        this.handleCourseSelection = this.handleCourseSelection.bind(this);
    }

    componentWillMount() {
        this.props.loadNotes();
    }

    createCourseOption(course) {
        return (
            <option key={course.prefix + course.three_digits}
                    value={JSON.stringify(course)}>{course.prefix + ' ' + course.three_digits}</option>
        )
    }

    handleCourseSelection(event) {
        const course = JSON.parse(event.target.value);
        this.props.selectCourse(course);
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
                    <a href={note.note}>
                        <h3>{note.course_title}</h3>
                        <h3>{course_identifier}</h3>
                    </a>
                    <div className={styles.courseMeta}>
                        <div className={styles.courseProf}>Dr. {note.professor}</div>
                        <div className={styles.courseDate}><em>{semesterDict[note.semester] + ' ' + note.year}</em>
                        </div>
                    </div>
                </header>
                <section className={styles.noteComment}>
                    {note.note_comment}
                </section>
                <footer>
                    <div className={styles.noteMeta}>
                        <div className={styles.noteAuthor}><UserIcon/>{note.author}</div>
                        <div className={styles.noteCreated}><CalendarIcon/>{timestamp}</div>
                    </div>
                    <div className={styles.downloadButtonWrapper}>
                        <div>
                            <a href={note.note} className={styles.downloadButton}><DownloadIcon/></a>
                        </div>
                    </div>
                </footer>
            </li>
        )
    }

    render() {
        const notes = this.props.notesByCourse[this.props.selectedCourse] || {isFetching: true, responseCode: null};
        const isFetching = notes.isFetching;

        return (
            <div>
                <Banner
                    title="Notes"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                    className={styles.banner}
                />
                <section className={'container ' + styles.mainWrapper}>
                    <div className={styles.searchBar}>
                        <h4>Search</h4>
                        <Form inline>
                            <ControlLabel>Course</ControlLabel>
                            <FormControl componentClass="select" onChange={this.handleCourseSelection}>
                                {this.props.availableCourses.results.map(this.createCourseOption)}
                            </FormControl>
                        </Form>
                    </div>
                    {isFetching ? <Spinner/> :
                        <ul className={styles.notesList}>
                            {notes.results.length ? notes.results.map(this.createNote) :
                                <div className={styles.noNotes}>
                                    No notes were found for this course.
                                </div>}
                        </ul>
                    }
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {notesByCourse, selectedCourse, availableCourses} = state.notes;
    return {notesByCourse, selectedCourse, availableCourses}
}

function mapDispatchToProps(dispatch) {
    return {
        loadNotes: (courseName) =>
            dispatch(loadNotes(courseName)),
        selectCourse: (courseName) =>
            dispatch(selectCourse(courseName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
