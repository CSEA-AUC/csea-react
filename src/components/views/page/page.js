import React, {Component, PropTypes} from 'react'

import CSEANavbar from '../includes/csea-navbar/csea-navbar'
import styles from './page.scss';

export default class Page extends Component {
    render() {
        return (
            <div className="appWrapper">
                <CSEANavbar fixedTop fluid collapseOnSelect inverse/>
                <section className={"container-fluid " + styles.banner + ' ' + this.props.className}>
                    <header>
                        <h1 className={styles.title}>{this.props.title}</h1>
                        <hr className={styles.divider}/>
                        <h3 className={styles.subtitle}>{this.props.subtitle}</h3>
                    </header>
                </section>
                <section className={styles.mainWrapper}>
                    {this.props.children}
                </section>
                {/*TODO: Add footer here*/}
            </div>
        )
    }
}

