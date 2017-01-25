import React, {Component, PropTypes} from 'react'

import styles from './banner.scss';

export default class Banner extends Component {
    render() {
        return (
            <section className={"container-fluid " + styles.banner + ' ' + (this.props.className || '')}>
                <header>
                    <h1 className={styles.title}>{this.props.title}</h1>
                    <hr className={styles.divider}/>
                    <h3 className={styles.subtitle}>{this.props.subtitle}</h3>
                </header>
            </section>
        )
    }
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};