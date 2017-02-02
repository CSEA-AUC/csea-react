import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {loadNotes}from '../../actions/notes'
import styles from './notes.scss'

class Notes extends Component {
    componentWillMount() {
        this.props.loadNotes();
    }

    render() {
        return (<h1>HI</h1>);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadNotes: () =>
            dispatch(loadNotes())
    }
}

export default connect(null, mapDispatchToProps)(Notes)
