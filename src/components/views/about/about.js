import React, {Component, PropTypes} from 'react'
import {} from 'react-bootstrap'

import styles from './about.scss';

export default class About extends Component {
    render() {
        return (
            <header className={styles.pageTitle}>
                <h1>About</h1>
                <h3>Small subtitle that we can add here.</h3>
            </header>
        )
    }

}