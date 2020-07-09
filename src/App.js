import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { addUserAction } from './actions/userAction';

import PrivateRoute from './utils/privateRoute';

import FirebaseContext from './context/firebaseContext';

import HomePage from './pages/HomePage/homePage';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import className from './App.module.css';

import { LoadingOutlined } from '@ant-design/icons';


class App extends React.Component {

  componentDidMount() {
    const { auth, setUserCardsUrl } = this.context;
    const { history, addUser } = this.props;
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUserCardsUrl(user.uid);
        history.push('/');
        addUser(user)
      } else {
        localStorage.removeItem('user');
        setUserCardsUrl(null);
        history.push('/login');
        addUser({})
      }
    })
  }

  render() {

    const { user } = this.props.user;
    
    if (!user) {
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
App.contextType = FirebaseContext;

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addUser: addUserAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
