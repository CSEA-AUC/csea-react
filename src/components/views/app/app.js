import React, {Component, PropTypes} from 'react'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import style from './app.scss';

export default class App extends Component {
    render() {
        return(
            <AppBar title="CSEA" leftIcon="menu"/>
        )
    }
}