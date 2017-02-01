import React, {Component, PropTypes} from 'react'

import {Banner} from '../../components'
import styles from './about.scss';

export default class About extends Component {
    render() {
        return (
            <div>
                <Banner title="About us" subtitle="All you need to know about current and past CSEA families!"
                        className={styles.banner}/>
                <section className={styles.mainWrapper}>
                    <h1>About us</h1>
                    <h3>All you need to know about current and past CSEA families!</h3>
                </section>
            </div>
        )
    }
}