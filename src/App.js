import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';

import FirebaseContext from './context/firebaseContext';

import HomePage from './pages/HomePage/homePage';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import className from './App.module.css';

import { LoadingOutlined } from '@ant-design/icons';


class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    const { auth, setUserCardsUrl } = this.context;
    const { history } = this.props;
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUserCardsUrl(user.uid);
        history.push('/');
        this.setState({
          user,
        });
      } else {
        localStorage.removeItem('user');
        setUserCardsUrl(null);
        history.push('/login');
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
      <Switch>
        <PrivateRoute path='/' exact component={HomePage}/>
        <Route path='/home'>
          <Redirect to='/'/>
        </Route>
        <Route path='/login' component={LoginPage}/>
        <Route path='/registry' component={RegisterPage}/>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);

App.contextType = FirebaseContext;