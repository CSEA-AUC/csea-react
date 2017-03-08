import React, {Component, PropTypes} from 'react'

import {Banner} from '../../components'
import styles from './about.scss';

export default class About extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="About us"
                    subtitle="Our goals and vision."
                />
                <section className={styles.mainWrapper + ' container'}>
                    <h1>Our Mission</h1>
                    <div className={styles.missionContent}>
                        <p>
                            Our vision for the association is to represent the computer
                            science and engineering students at the American University in Cairo.
                        </p>

                        <p>Our main objective is facilitating communication between departments and students and the
                            outer
                            world as well.
                        </p>
                        <p>
                            We aim at providing a long lasting stable organization that would put this vision into
                            action.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}