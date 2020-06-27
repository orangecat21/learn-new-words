import React from 'react';
import className from './header2.module.css';

const Header2 = ({ title="Заголовок 2-го уровня" }) => {
    return <h2 className={className.title}>{title}</h2>
}

export default Header2;