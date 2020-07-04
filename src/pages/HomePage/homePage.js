import React from 'react';

import database from '../../services/firebase';
import { fire } from '../../services/firebase';

import HeaderBlock from '../../components/headerBlock/headerBlock';
import Header1 from '../../components/header1/header1';
import MainContent from '../../components/mainContentWrapper/mainContent.js';
import AddCardForm from '../../components/addCardForm/addCardForm';
import Card from '../../components/card/card';
import Header2 from '../../components/header2/header2';
import Paragraph from '../../components/paragraph/paragraph';
import Footer from '../../components/footer/footerBlock';
import Copyright from '../../components/copyright/copyright';

import { LogoutOutlined } from '@ant-design/icons';

import className from './homePage.module.css';



export default class HomePage extends React.Component {
    state = {
        wordArr: [],
    }

    userCardsUrl = `/cards/${this.props.user.uid}/`;

    componentDidMount() {
        database.ref(this.userCardsUrl).on('value', res => {
            this.setState({
                wordArr: Object.values(res.val() || {}),
            });
        });
    }

    handlerSignOut = () => {
        fire.auth().signOut().catch(err => console.error(err));
    }

    handlerDeleteCard = (id) => {
        database.ref(this.userCardsUrl+id).remove();
    }

    handlerAddCard = (rus, eng) => {
        if (typeof rus === "undefined") {
            return false;
        } else {
            const newId = +new Date();
            database.ref(this.userCardsUrl+newId).set({
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
                    <Header1 title="Изучаем английский" />
                    <div 
                        className={className['sign-out']}
                        onClick={this.handlerSignOut}
                    >
                        <LogoutOutlined/>
                    </div>
                </HeaderBlock>

                <MainContent>
                    <Header2 title="Учите слова онлайн" />
                    <Paragraph text="Воспользуйтесь карточками для запоминания и пополнения словарного запаса. Кликните на неизвестное слово и узнаете перевод!" />
                    {
                        wordArr.map(({ eng, rus, id }) => (
                            <Card
                                onDeleted={this.handlerDeleteCard}
                                key={id}
                                id={id}
                                eng={eng}
                                rus={rus}
                            />))
                    }
                    <AddCardForm onFormSubmit={this.handlerAddCard} />
                </MainContent>

                <Footer>
                    <Copyright
                        author="Kirill Borovskikh"
                        startOfDev="2020"
                    />
                </Footer>
            </>
        );
    }
}
