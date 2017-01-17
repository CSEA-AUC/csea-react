import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRoute}from 'react-router'

import {app, about, page} from './components'

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={app}/>
            <Route path="page" component={page}/>
        </Route>
    </Router>
)