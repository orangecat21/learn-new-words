import React from 'react';
import { Input } from 'antd';
import getTranslateWord from '../../services/dictionary';
import className from './addCardForm.module.css';

const { Search } = Input;

export default class addCardForm extends React.Component {

    state = {
        eng: '',
        isBusy: false,
    }

    handlerChange = (e) => {
        this.setState({
            eng:e.target.value
        })
    }

    getWord = async () => {
        const { eng } = this.state;
        const translate = await getTranslateWord(eng)
        this.props.onFormSubmit( translate, eng);
        this.setState({
            eng:'',
            isBusy: false,
        })
    }

    handlerSubmit = async () => {
        this.state.eng !== '' && this.setState({
            isBusy: true,
        }, this.getWord);
    }

    render () {
        const { eng, isBusy } = this.state;
        return (
            <div className={className.form}>
                <Search
                    placeholder="Введите английское слово"
                    enterButton="Добавить карточку"
                    size="large"
                    onSearch={this.handlerSubmit}
                    onChange={this.handlerChange}
                    value={eng}
                    loading={isBusy}
                />
            </div>
        );
    }
}