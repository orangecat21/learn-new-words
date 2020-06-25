import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './components/headerBlock/headerBlock.js';


const List = () => {
  const listItems = ['Item 1', 'Item 2', 'Item 3'];
  const authItem = <li>Item 0</li>;
  const auth = false;
  return (
    <ul>
      { auth ? authItem : null }
      {
        listItems.map((item, index) => <li key={ index }> { item } </li>)
      }
    </ul>
  );
}

const App = () => {
  return (
    <>
      <Header/>
      <List/>
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));