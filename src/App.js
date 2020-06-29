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
import {wordsList} from './components/wordsList';
import './index.css';

export default class App extends React.Component {
  state = {
    wordArr: wordsList,
  }

  handlerDeleteCard = (id) => {
    this.setState(({ wordArr }) => {
      const idDelete = wordArr.findIndex(item => item.id === id);
      const newWordArr = [
        ...wordArr.slice(0, idDelete),
        ...wordArr.slice(idDelete+1)
      ]
      return {
        wordArr: newWordArr,
      }
    });
  }

  handlerAddCard = (rus, eng) => {
    this.setState(({wordArr}) => {
      const lastId = wordArr[wordArr.length-1].id;
      const newWordArr = [
        ...wordArr,
        {
          rus: rus.toLowerCase(),
          eng: eng.toLowerCase(),
          id: lastId+1
        }
      ];
      return {
        wordArr: newWordArr,
      }
    })
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