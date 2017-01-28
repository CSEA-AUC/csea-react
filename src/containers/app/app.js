import React, {Component, PropTypes} from 'react'
import {Nav, NavItem, Navbar, Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import Envelope from 'react-icons/lib/fa/envelope'
import Facebook from 'react-icons/lib/fa/facebook'
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
                <footer className={styles.appFooter}>
                    <Grid>
                        <Row>
                            <Col className={styles.linksWrapper} xs={6}>
                                <nav className={styles.navIcons}>
                                    <Facebook className={styles.facebookIcon}/>
                                    <Envelope className={styles.mailIcon}/>
                                </nav>
                                <nav className={styles.cseaLinks}>
                                    <strong>CSEA</strong>
                                    <Link to={'/announcements'}>Announcements</Link>
                                    <Link to={'/notes'}>Notes</Link>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/team'}>Team</Link>
                                </nav>
                            </Col>
                            <Col className={styles.copyrightWrapper} xs={6}>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
};