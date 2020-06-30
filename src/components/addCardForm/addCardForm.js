import React from 'react';
import className from './addCardForm.module.css';

export default class addCardForm extends React.Component {

    state = {
        rus: '',
        eng: ''
    }

    handlerRusChange = (e) => {
        this.setState({
            rus:e.target.value
        })
    }

    handlerEngChange = (e) => {
        this.setState({
            eng:e.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        const {rus, eng} = this.state;
        this.props.onFormSubmit(rus, eng);
        this.setState({
            rus:'',
            eng:''
        })
    }

    render () {
        const {rus, eng} = this.state;
        return (
            <form className={className.form} onSubmit={this.handlerSubmit}>
                <input
                    className={className.form__input}
                    type="text"
                    value={rus}
                    onChange={this.handlerRusChange}
                    placeholder='Слово на русском'
                    required
                />
                <input
                    className={className.form__input}
                    type="text"
                    value={eng}
                    onChange={this.handlerEngChange}
                    placeholder='Английский перевод'
                    required
                />

                <button className={className.form__button}>
                    Добавить новое слово
                </button>
            </form>
        );
    }
}