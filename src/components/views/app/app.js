import React, {Component, PropTypes} from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'

import CSEANavbar from '../includes/navbar/csea-navbar'
import styles from './app.scss';
import logo from './csealogo.png'

export default class App extends Component {
    render() {
        return (
            <div className="appWrapper">
                <CSEANavbar fixedTop/>
                <section className={"container-fluid " + styles.banner}>
                    <header>
                        <h4>The American University In Cairo's</h4>
                        <h2>Computer Science and Engineering Association</h2>
                    </header>
                    <div className={styles.logoWrapper}>
                        <Image className={styles.CSEALogo} src={logo} circle responsive/>
                    </div>
                </section>
                <section className={styles.mainWrapper}>
                    <Grid fluid>
                        <Row>
                            <Col className={styles.main} md={8} mdOffset={2}>
                                {this.props.children}
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