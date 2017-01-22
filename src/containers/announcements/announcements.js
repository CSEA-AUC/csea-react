import React, {Component, PropTypes} from 'react'

import {Banner} from '../../components'
import styles from './announcements.scss';

export default class Announcements extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="Announcements"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                    className={styles.page}
                />
                {this.props.children}
            </div>
        )
    }
}

Announcements.propTypes = {
    children: PropTypes.node.isRequired,
};