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
                <Navbar fixedTop fluid collapseOnSelect className={styles.navbar}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/*Change to IndexLink?*/}
                            <Link to={'/'}><div className={styles.brand}/></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={'/announcements'} className={styles.announcementsLink}><NavItem eventKey={1}>Announcements</NavItem></LinkContainer>
                            <LinkContainer to={'/notes'}><NavItem eventKey={2} className={styles.notesLink}>Notes</NavItem></LinkContainer>
                            <LinkContainer to={'/team'}><NavItem eventKey={3} className={styles.teamLink}>The Team</NavItem></LinkContainer>
                            <LinkContainer to={'/about'}><NavItem eventKey={4} className={styles.aboutLink}>About</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {this.props.children}

                <footer className={styles.appFooter}>
                    <Grid>
                        <Row>
                            <Col className={styles.linksWrapper} xs={6}>
                                <nav className={styles.navIcons}>
                                    <a className={styles.facebookIcon}
                                       href="https://www.facebook.com/csea.auc/"><Facebook /></a>
                                    <a className={styles.mailIcon} href="mailto:csea@aucegypt.edu"><Envelope/></a>
                                </nav>
                                <nav className={styles.cseaLinks}>
                                    <strong>CSEA</strong>
                                    <Link to={'/announcements'}>Announcements</Link>
                                    <Link to={'/notes'}>Notes</Link>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/team'}>Team</Link>
                                </nav>
                                <span>
                                    <strong>Contact us at </strong>
                                    <a href="mailto:csea@aucegypt.edu">csea@aucegypt.edu</a>
                                </span>
                            </Col>
                            <Col className={styles.copyrightWrapper} xs={6}>
                                <div className={styles.smallLogo}/>
                                <div>
                                    <span>Copyright © 2017 CSEA</span>
                                </div>
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