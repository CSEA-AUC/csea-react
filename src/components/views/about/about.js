import React, {Component, PropTypes} from 'react'

import Page from '../page/page';
import styles from './about.scss';

export default class About extends Component {
    render() {
        return (
            <Page title="About us" subtitle="All you need to know about current and past CSEA families!">
                <header className={styles.pageTitle}>
                    <h1>About us</h1>
                    <h3>All you need to know about current and past CSEA families!</h3>
                </header>
            </Page>
        )
    }

}