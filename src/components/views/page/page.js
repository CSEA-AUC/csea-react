import React, {Component, PropTypes} from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'

import CSEANavbar from '../includes/csea-navbar/csea-navbar'
import styles from './page.scss';

export default class Page extends Component {
    render() {
        return (
            <div className="appWrapper">
                <CSEANavbar fixedTop fluid collapseOnSelect inverse/>
                <section className={"container-fluid " + styles.banner}>
                    <header>
                        <h4>The American University In Cairo's</h4>
                        <h1>Computer Science and Engineering Association</h1>
                    </header>
                    <div className={styles.logoWrapper}>

                    </div>
                </section>
                <section className={styles.mainWrapper}>
                    <Grid fluid>
                        <Row>
                            <Col className={styles.main} md={6} mdOffset={3}>
                                <h2>Latest Announcements</h2>
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <footer>

                </footer>
            </div>
        )
    }
}
