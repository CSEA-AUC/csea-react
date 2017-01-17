import React, {Component, PropTypes} from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'

import styles from './csea-navbar.scss';

export default class CSEANavbar extends Component {
    render() {
        return (
            <Navbar fixedTop={this.props.fixedTop} fluid collapseOnSelect inverse style={this.props.style}
                    className={styles.navbar + ' ' + this.props.className}>
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
        )
    }
}