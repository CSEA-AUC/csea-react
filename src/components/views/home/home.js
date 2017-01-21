import React, {Component, PropTypes} from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'

import CSEANavbar from '../includes/csea-navbar/csea-navbar'
import styles from './home.scss';
import logo from './csealogo.png'

export default class Home extends Component {
    render() {
        const article = (
            <article className={styles.post}>
                <header>
                    <h2 className={styles.title}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    <h5 className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h5>
                </header>
                <div className={styles.snippet}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at vestibulum nunc.
                        Proin tincidunt ex sapien, maximus tristique ligula finibus sit amet. Quisque eu massa mollis, egestas ipsum vel, molestie magna.
                        Donec porttitor ac turpis non pharetra. Duis vitae interdum orci. Morbi nisl tellus, aliquam vel lobortis id, maximus at purus.
                        Nam rutrum leo lectus, vel dictum velit luctus quis. Donec id eleifend risus. Aliquam erat volutpat. Maecenas ac nibh diam. In non cursus felis.
                    </span>
                </div>
                <footer>
                    <span className={styles.postAuthor}>CSEA Admin</span>
                    <span className={styles.postDate}>15 SEPTEMBER 2015</span>
                    <span className={styles.postCommentCount}>5 Comments</span>
                    <span className={styles.postContinueReading}>Continue Reading</span>
                </footer>
            </article>
        );

        return (
            <div>
                <CSEANavbar fixedTop fluid collapseOnSelect inverse/>
                <section className={"container-fluid " + styles.banner}>
                    <header>
                        <h4>The American University In Cairo's</h4>
                        <h1>Computer Science and Engineering Association</h1>
                    </header>
                    <div className={styles.logoWrapper}>
                        <Image className={styles.CSEALogo} src={logo} circle responsive/>
                    </div>
                </section>
                <section className={styles.mainWrapper}>
                    <Grid fluid>
                        <Row>
                            <Col className={styles.main} md={6} mdOffset={3}>
                                <h2>Latest Announcements</h2>
                                {article}
                                {article}
                                {article}
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