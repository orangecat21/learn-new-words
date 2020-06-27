import React from 'react';
import className from './footerBlock.module.css';

const FooterBlock = ({ children }) => {
    return (
        <footer className={className.footer}>
            { children }
        </footer>
    );
}

export default FooterBlock;