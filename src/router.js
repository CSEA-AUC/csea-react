import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRoute}from 'react-router'

import {app, about, page, announcements, ListPosts} from './components'

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={app}/>
            <Route path="about" component={about}/>
            <Route path="announcements" component={announcements}>
                <IndexRoute component={ListPosts}/>
            </Route>
            {/*<Route path="*" status={404}/>*/}
        </Route>
    </Router>
)