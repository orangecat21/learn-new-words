import React from 'react';
import className from './header1.module.css';

const Header1 = ({ title="Заголовок 1-го уровня" }) => {
    return <h1 className={className.header__title}>{title}</h1>
}

export default Header1;