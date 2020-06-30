import React from 'react';
import cn from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import className from './card.module.css';

export default class Card extends React.Component {

    state = {
        done: false,
        isRemembered: false
    }

    handlerCardClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done,
            }
        });
    }

    handlerCheckClick = () => {
        this.setState(({ done, isRemembered }) => {
            this.handlerCardClick = null;
            return {
                isRemembered: true,
                done: true,
            }
        })
    }

    handlerDelete = () => {
        this.props.onDeleted(this.props.id);
    }

    render() {
        const { eng, rus } = this.props;
        return (
                <div className={className.card__wrap}>
                    <div 
                        className={className.card}
                        onClick={this.handlerCardClick}
                    >

                        <div className={cn(className.cardInner, {[className.done]: this.state.done, [className.remembered]: this.state.isRemembered})}>
                            <div className={className.cardFront}>
                                { eng }
                            </div>
                            <div className={className.cardBack}>
                                { rus }
                            </div>
                        </div>
                    </div>
                    <CheckSquareOutlined
                        className={
                            cn(className.card__icon, {[className.card__icon_green]: this.state.isRemembered})
                        }
                        onClick={this.handlerCheckClick}
                    />
                    <DeleteOutlined
                        className={className.card__icon}
                        onClick={this.handlerDelete}            
                    />
                </div>
                );
    }
}