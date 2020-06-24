import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => <h1>Hello World!</h1>;

const List = () => {
  return (
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
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