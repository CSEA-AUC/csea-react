import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRoute}from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import store from './store'

import {
    App,
    Home,
    About,
    Announcements,
    ListPosts,
    ViewPost,
    Notes
} from './containers'


let history = syncHistoryWithStore(hashHistory, store);

if (process.env.NODE_ENV === 'production') {
    history = syncHistoryWithStore(browserHistory, store);
}

export default (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="announcements" component={Announcements}>
                <IndexRoute component={ListPosts}/>
                <Route path=":slug" component={ViewPost}/>
            </Route>
            <Route path="notes" component={Notes}/>
            <Route path="about" component={About}/>
            {/*<Route path="*" status={404}/>*/}
        </Route>
    </Router>
)