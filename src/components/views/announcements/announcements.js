import React, {Component, PropTypes} from 'react'

import Page from '../page/page';
import styles from './announcements.scss';

export default class Announcements extends Component {
    render() {
        return (
            <Page title="Announcements" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
            className={styles.page}>
                {this.props.children}
            </Page>
        )
    }

}