import React from 'react';
import s from './headerBlock.module.css';
import logo from './logo.png';
import {ReactComponent as LogoSVG} from '../../logo.svg';

const Header = () => {
    return (
        <div class={s.cover}>
            <div class={s.wrap}>
                <h1 class={s.header}>Учите слова онлайн</h1>
                <img src={logo} alt='Logo'></img>
                <LogoSVG/>
                <p class={s.descr}>Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов</p>
            </div>
        </div>
    );
};

export default Header;
