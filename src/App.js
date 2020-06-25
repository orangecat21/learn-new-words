import React from 'react';
import MainContent from './components/mainContent/mainContent.js';
import Header from './components/header/headerBlock';
import Footer from './components/footer/footerBlock';
import './index.css';

const App = () => {
  return (
    <>
      <Header
        title="Первое веб-приложение"
      />

      <MainContent 
        title="Учите слова онлайн"
        descr="Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов"
      />

      <Footer
        author="Kirill Borovskikh"
        startOfDev="2020"
      />
    </>
  );
}

export default App;
