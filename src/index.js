import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import router from './router'

const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>{router}</Provider>, root);