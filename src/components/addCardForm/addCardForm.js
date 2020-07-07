import React from 'react';
import { Input } from 'antd';
import getTranslateWord from '../../services/dictionary';
import className from './addCardForm.module.css';

const { Search } = Input;

export default class addCardForm extends React.Component {

    state = {
        inputValue: '',
        isBusy: false,
    }

    handlerChange = (e) => {
        this.setState({
            inputValue:e.target.value,
        })
    }

    isRussian = (word) => /[а-я]/i.test(word);

    getWord = async () => {
        const { inputValue } = this.state;
        const { onFormSubmit } = this.props

        if(this.isRussian(inputValue)) {
            const eng = await getTranslateWord(inputValue, 'ru-en');
            onFormSubmit(inputValue, eng);
        } else {
            const rus = await getTranslateWord(inputValue, 'en-ru');
            onFormSubmit(rus, inputValue);
        }
        this.setState({
            inputValue:'',
            isBusy: false,
        })
    }

    handlerSubmit = async () => {
        this.state.inputValue !== '' && this.setState({
            isBusy: true,
        }, this.getWord);
    }

    render () {
        const { inputValue, isBusy } = this.state;
        return (
            <div className={className.form}>
                <Search
                    placeholder="Введите слово"
                    enterButton="Добавить карточку"
                    size="large"
                    onSearch={this.handlerSubmit}
                    onChange={this.handlerChange}
                    value={inputValue}
                    loading={isBusy}
                />
            </div>
        );
    }
}