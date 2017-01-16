import React, {Component, PropTypes} from 'react'
import {Nav, NavItem, Navbar, Image, Grid, Row, Col} from 'react-bootstrap'

import styles from './app.scss';
import logo from './greenlogo.png'

export default class App extends Component {
    render() {
        return (
            <div className="appWrapper">
                <Navbar fixedTop fluid collapseOnSelect inverse className={styles.navbar}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">CSEA</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
            </div>
        )
    }
}