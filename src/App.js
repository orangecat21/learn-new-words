import React from 'react';

import FirebaseContext from './context/firebaseContext';

import HomePage from './pages/HomePage/homePage';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import className from './App.module.css';

import { LoadingOutlined } from '@ant-design/icons';


export default class App extends React.Component {

  state = {
    user: null,
    alredyRegister: true,
  }

  componentDidMount() {
    const { auth, setUserCardsUrl } = this.context;
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserCardsUrl(user.uid);
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
  
  changeRegisterStatus = () => {
    this.setState(({ alredyRegister }) => {
      return {
        alredyRegister: !alredyRegister,
      }
    })
  }

  render() {

    const { user, alredyRegister } = this.state;
    
    if (user === null) {
      return (
        <div className={className['spinner-wrap']}>
          <LoadingOutlined />
        </div>
      );
    }
    return (
      <>
        {user ? <HomePage/> : alredyRegister ? <LoginPage switchPage={this.changeRegisterStatus}/> : <RegisterPage switchPage={this.changeRegisterStatus}/>}
      </>
    );
  }
}

App.contextType = FirebaseContext;