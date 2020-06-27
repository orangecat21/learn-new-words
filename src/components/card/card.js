import React from 'react';
import cn from 'classnames';
import className from './card.module.css';

export default class Card extends React.Component {

    state = {
        done: false,
    }

    handlerCardClick = () => {
        this.setState({
            done: !this.state.done,
        })
    }

    render() {
        console.log([className.done]);
        const { eng, rus } = this.props;
        return (
                <div 
                    className={className.card}
                    onClick={this.handlerCardClick}
                >
                    <div className={cn(className.cardInner, {[className.done]: this.state.done})}>
                        <div className={className.cardFront}>
                            { eng }
                        </div>
                        <div className={className.cardBack}>
                            { rus }
                        </div>
                    </div>
                    
                </div>
                );
    }
}