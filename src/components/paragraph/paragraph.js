import React from 'react';
import className from './paragraph.module.css';

const Paragraph = ({ text="Новый абзац текста" }) => {
    return <p className={className.text}>{text}</p>;
}

export default Paragraph;