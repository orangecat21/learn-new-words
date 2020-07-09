import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import './index.css';
import 'antd/dist/antd.css';

import App from './App';

import FirebaseContext from './context/firebaseContext';
import Firebase from './services/firebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = new createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <FirebaseContext.Provider value={new Firebase()}>
                <App/>
            </FirebaseContext.Provider>
        </Router>
    </Provider>, document.querySelector('#root')
);