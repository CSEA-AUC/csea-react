import React, {Component, PropTypes} from 'react'
import {Image} from 'react-bootstrap'
import styles from './member-card.scss'

export default class MemberCard extends Component {
    render() {
        return(
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={this.props.imageUrl} responsive/>
                </div>
                <section className={styles.content}>
                    <h2 className={styles.name}>{this.props.name}</h2>
                    <div className={styles.position}>{this.props.position}</div>
                    <div className={styles.description}>{this.props.description}</div>
                </section>
            </div>
        )
    }
}

MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string
};
