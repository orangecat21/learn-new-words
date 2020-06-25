import React from 'react';
import className from './footerBlock.module.css';

const footerBlock = ({ author = "Anonymous", startOfDev = "2000" }) => {
    const presentYear = new Date().getFullYear();
    return (
        <footer className={className.footer}>
            <small className={className.footer__copyright}>&copy; {author}, {Number.parseInt(startOfDev) === presentYear ? presentYear : startOfDev + ' - ' + presentYear}</small>
        </footer>
    );
}

export default footerBlock;