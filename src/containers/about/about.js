import React, {Component, PropTypes} from 'react'

import {Banner} from '../../components'
import styles from './about.scss';

export default class About extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="About us"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                />
                <section className={styles.mainWrapper + ' container'}>
                    <h1>Our Mission</h1>
                    <div className={styles.missionContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut.</p>
                    </div>
                </section>
            </div>
        )
    }
}