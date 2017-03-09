import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {Banner, MemberCard} from '../../components'

import styles from './team.scss'
import img from './temp_image.png'

export default class Team extends Component {
    render() {
        return (
            <div>
                <Banner
                    title="The Team"
                    subtitle="The people behind CSEA."
                />
                <section className={styles.mainWrapper + ' container'}>
                    <h1>CSEA '16 - '17</h1>
                    <div className={styles.presidents}>
                        <MemberCard name="Sherif 'Gedo' Sorour" position="CSEA President" imageUrl={img}/>
                        <MemberCard name="Amr Saeid" position="CSEA Vice President" imageUrl={img}/>
                    </div>
                    <div className={styles.heads}>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                        <MemberCard name="Aliaa Amin" position="HR Head" imageUrl={img}/>
                    </div>
                </section>
            </div>
        )
    }
}
