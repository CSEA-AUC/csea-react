import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRoute}from 'react-router'

import {
    App,
    Home,
    About,
    Announcements,
    ListPosts
} from './components'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="announcements" component={Announcements}>
                <IndexRoute component={ListPosts}/>
            </Route>
            {/*<Route path="*" status={404}/>*/}
        </Route>
    </Router>
)