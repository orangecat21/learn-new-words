import React from 'react';
import logo from './logo.png';
import className from './headerBlock.module.css';


const HeaderBlock = ({ customLogo, children }) => {
    return (
        <header className={className.header}>
            <img className={className.header__logo} src={customLogo || logo} alt='Logo'></img>
            { children }
        </header>
    );
}

export default HeaderBlock;