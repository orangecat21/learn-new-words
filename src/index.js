import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => <h1 className="App-header">Hello World!</h1>;

const List = () => {
  const listItems = ['Item 1', 'Item 2', 'Item 3'];
  const authItem = <li>Item 0</li>;
  const auth = true;
  return (
    <ul>
      {auth ? authItem : null}
      {
        listItems.map(item => <li>{ item }</li>)
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