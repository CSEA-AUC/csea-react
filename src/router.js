import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRoute}from 'react-router'

import {app, about} from './components'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={app}>
            <IndexRoute component={about}/>
        </Route>
    </Router>
)