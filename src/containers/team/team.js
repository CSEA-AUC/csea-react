import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, ControlLabel, FormControl, Form} from 'react-bootstrap'

import {Banner, Spinner} from '../../components'
import DownloadIcon from 'react-icons/lib/fa/download'
import UserIcon from 'react-icons/lib/fa/user'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import {loadNotes, selectCourse}from '../../actions/notes'

import moment from 'moment'

import styles from './team.scss'

export default class Team extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="The Team"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                />
                <section className={styles.mainWrapper}>

                </section>
            </div>
    )
    }
    }
