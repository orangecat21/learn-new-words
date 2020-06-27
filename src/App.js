import React from 'react';
import HeaderBlock from './components/headerBlock/headerBlock';
import Header1 from './components/header1/header1';
import MainContent from './components/mainContentWrapper/mainContent.js';
import Card from './components/card/card';
import Header2 from './components/header2/header2';
import Paragraph from './components/paragraph/paragraph';
import Footer from './components/footer/footerBlock';
import Copyright from './components/copyright/copyright';
import {wordsList} from './components/wordsList';
import './index.css';

const App = () => {
  return (
    <>
      <HeaderBlock>
        <Header1 title="Изучаем английский"/>
      </HeaderBlock>

      <MainContent>
        <Header2 title="Учите слова онлайн"/>
        <Paragraph text="Воспользуйтесь карточками для запоминания и пополнения словарного запаса"/>
        {
          wordsList.map(({eng, rus}, index) => (<Card key={index} eng={eng} rus={rus}/>))
        }
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

export default App;
