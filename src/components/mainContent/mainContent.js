import React from 'react';
import s from './mainContent.module.css';
import {ReactComponent as LogoSVG} from '../../logo.svg';

const mainContent = ({ title, hideBackground = false, descr, hideLogo = false }) => {
    const styleCover = hideBackground ? {backgroundImage: 'none'} : {};

    return (
        <main className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                {title && <h2 className={s.header}>{ title }</h2>}
                {!hideLogo && <LogoSVG/>}
                {descr && <p className={s.descr}>{descr}</p>}
            </div>
        </main>
    );
};

export default mainContent;
