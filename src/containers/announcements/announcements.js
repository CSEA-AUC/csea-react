import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Waypoint from 'react-waypoint/build/waypoint'
import {Banner} from '../../components'

import {setNavbarFixed, setNavbarStatic}from '../../actions/'
import styles from './announcements.scss'

class Announcements extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="Announcements"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                    className={styles.banner}
                    bottomPadding
                />
                <Waypoint onEnter={this.props.setNavbarStatic} onLeave={this.props.setNavbarFixed}/>
                <section className={styles.mainWrapper}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

Announcements.propTypes = {
    children: PropTypes.node.isRequired,
    setNavbarFixed: PropTypes.func.isRequired,
    setNavbarStatic: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        setNavbarFixed: () =>
            dispatch(setNavbarFixed()),
        setNavbarStatic: () =>
            dispatch(setNavbarStatic())
    }
}

export default connect(null, mapDispatchToProps)(Announcements)