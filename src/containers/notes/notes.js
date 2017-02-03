import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {Banner, Spinner} from '../../components'

import {loadNotes}from '../../actions/notes'
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
        const course = 'CSCE 106/1001';
        return (
            <li key={note.id} className={styles.note}>
                <header>
                    <h3>{course}</h3>
                    <div className={styles.courseMeta}>
                        <span className={styles.courseProf}>{note.professor}</span>
                        <span className={styles.courseDate}>{semesterDict[note.semester] + ' ' + note.year}</span>
                    </div>
                </header>
                <section className={styles.noteComment}>
                    {note.note_comment}
                </section>
                <footer>
                    <div className={styles.noteMeta}>
                        <div className={styles.noteAuthor}>{note.author}</div>
                        <div className={styles.noteCreated}>{note.created}</div>
                    </div>
                    <div className={styles.downloadButton}>
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
                <section className={styles.mainWrapper}>
                    <Grid>
                        <Row>
                            <Col className={styles.sidebar} md={3}>
                                <h2>Latest Announcements</h2>
                            </Col>
                            <Col className={styles.main} md={9}>
                                {isFetching ? <Spinner/> :
                                    <ul className={styles.notesList}>
                                        {notes.results.map(this.createNote)}
                                        {notes.results.map(this.createNote)}
                                        {notes.results.map(this.createNote)}
                                    </ul>
                                }
                            </Col>
                        </Row>
                    </Grid>
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
