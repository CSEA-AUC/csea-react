import React, {Component, PropTypes} from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'

import styles from './app.scss'

export default class App extends Component {
    render() {
        return (
            <div className="appWrapper">
                <Navbar fixedTop fluid collapseOnSelect inverse className={styles.navbar}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/*Change to IndexLink?*/}
                            <Link to={'/'}>CSEA</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to={'/about'}><NavItem eventKey={1}>About</NavItem></LinkContainer>
                            <LinkContainer to={'/announcements'}><NavItem eventKey={2} href="#">Announcements</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
                {/*footer here*/}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
};