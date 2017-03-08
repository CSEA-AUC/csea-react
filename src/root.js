import React, {Component} from 'react'
import {Provider} from 'react-redux'

import store from './store'
import router from './router'

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>{router}</Provider>
        )
    }
}
