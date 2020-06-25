import React from 'react';
import logo from './logo.png';
import className from './headerBlock.module.css';


const headerBlock = ({ title, customLogo }) => {
    return (
        <header className={className.header}>
            <img className={className.header__logo} src={customLogo || logo} alt='Logo'></img>
            {title && <h1 className={className.header__title}>{title}</h1>}
        </header>
    );
}

export default headerBlock;