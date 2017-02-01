import React, {Component, PropTypes} from 'react'

import logo from '../../../assets/img/csealogo.png'
import styles from './spinner.scss'

export default class Spinner extends Component {
    render() {
        return (
            <div className={styles.spinnerWrapper + ' ' + (this.props.bgColor || '')}>
                <div className={styles.spinner}>
                </div>
            </div>
        )
    }
}