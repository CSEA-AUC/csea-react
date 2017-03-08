import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

const root = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    root
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./root', () => {
        const NextApp = require('./root').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            root
        );
    });
}