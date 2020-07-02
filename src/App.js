import React from 'react';
import HeaderBlock from './components/headerBlock/headerBlock';
import Header1 from './components/header1/header1';
import MainContent from './components/mainContentWrapper/mainContent.js';
import AddCardForm from './components/addCardForm/addCardForm';
import Card from './components/card/card';
import Header2 from './components/header2/header2';
import Paragraph from './components/paragraph/paragraph';
import Footer from './components/footer/footerBlock';
import Copyright from './components/copyright/copyright';
import * as firebase from 'firebase';
import firebaseConfig from './services/firebaseConfig';
import './index.css';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default class App extends React.Component {
  state = {
    wordArr: [],
  }

  componentDidMount() {
    database.ref('/cards').on('value', res => {
      this.setState({
        wordArr: Object.values(res.val() || {}),
      });
    });
  }

  handlerDeleteCard = (id) => {
    database.ref(`/cards/${id}`).remove();
  }

  handlerAddCard = (rus, eng) => {
    if (typeof rus === "undefined") {
      return false;
    } else {
      const newId = +new Date();
      database.ref(`/cards/${newId}`).set({
          rus: rus.toLowerCase(),
          eng: eng.toLowerCase(),
          id: newId,
        });
    }
  }

  render() {
    const { wordArr } = this.state;
    return (
      <>
        <HeaderBlock>
          <Header1 title="Изучаем английский"/>
        </HeaderBlock>
  
        <MainContent>
          <Header2 title="Учите слова онлайн"/>
          <Paragraph text="Воспользуйтесь карточками для запоминания и пополнения словарного запаса Кликните на неизвестное слово и узнаете перевод"/>
          {
            wordArr.map(({eng, rus, id}) => (
            <Card
              onDeleted={this.handlerDeleteCard}
              key={id}
              id={id}
              eng={eng}
              rus={rus}
            />))
          }
          <AddCardForm onFormSubmit={this.handlerAddCard}/>
        </MainContent>
  
        <Footer>
          <Copyright
            author="Кирилл Боровских"
            startOfDev="2020"
          />
        </Footer>
      </>
    );
  }

}