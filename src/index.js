import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import FirebaseContext from './context/firebaseContext';
import Firebase from './services/firebase';


ReactDOM.render(<FirebaseContext.Provider value={new Firebase()}><App/></FirebaseContext.Provider>, document.querySelector('#root'));