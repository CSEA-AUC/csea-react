import React, {Component, PropTypes} from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import styles from './csea-navbar.scss';

export default class CSEANavbar extends Component {
    render() {
        return (
            <Navbar {...this.props} className={styles.navbar + ' ' + this.props.className}>
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*Change to IndexLink?*/}
                        <Link to={'/'}>CSEA</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to={'/page'}><NavItem eventKey={1}>Link Right</NavItem></LinkContainer>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}