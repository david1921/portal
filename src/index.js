import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Account from './components/containers/Account.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const store = createStore(reducers,{},applyMiddleware(ReduxPromise))
render(
    (
      <Provider store={store} >
        <App />
      </Provider>
    ), document.getElementById('main'))    