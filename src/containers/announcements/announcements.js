import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {Banner} from '../../components'


import styles from './announcements.scss'

class Announcements extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="Announcements"
                    subtitle="All the latest CSEA related news."
                    className={styles.banner}
                />
                <section className={styles.mainWrapper}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

Announcements.propTypes = {
    children: PropTypes.node.isRequired,
};

export default connect(null, null)(Announcements)