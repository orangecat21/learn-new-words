import React from 'react';
import s from './mainContent.module.css';

const MainContent = ({ hideBackground = false, children }) => {
    const styleCover = hideBackground ? {backgroundImage: 'none'} : {};

    return (
        <main className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                { children }
            </div>
        </main>
    );
};

export default MainContent;
