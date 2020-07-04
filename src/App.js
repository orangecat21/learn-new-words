import React from 'react';

import { fire } from './services/firebase';

import HomePage from './pages/HomePage/homePage';
import LoginPage from './pages/LoginPage/loginPage';
import className from './App.module.css';

import { LoadingOutlined } from '@ant-design/icons';


export default class App extends React.Component {

  state = {
    user: null,
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: false,
        });
      }
    })
  }
  
  render() {

    const { user } = this.state;
    
    if (user === null) {
      return (
        <div className={className['spinner-wrap']}>
          <LoadingOutlined />
        </div>
      );
    }
    return (
      <>
        {user ? <HomePage user={user}/> : <LoginPage/>}
      </>
    );
  }

}