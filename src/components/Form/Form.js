import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import InputGroup from '../InputGroup/InputGroup';
import Radio from '../Radio/Radio';
import Button from '../Button/Button';

import { milkTypes, coffeeTypes, sizeTypes } from '../../constants';
import coffee from '../../res/coffee.png';
import styles from './Form.module.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            size: 'Medium',
            type: null,
            milk: null,
        };
        this.onSelect = this.onSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSelect(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onSubmit(event) {
        const order = this.state;

        if (order.size && order.type && order.milk) {
            this.props.placeOrder({ ...order, status: 'Brewing', id: uuidv4() });
            this.setState({
                type: null,
                milk: null,
                size: null,
            });
        }

        event.preventDefault();
    }

    render() {
        const { size, type, milk } = this.state;

        return (
            <form className={styles.form}>
                <InputGroup>
                    {sizeTypes.map((coffeeSize) => {
                        return <Radio
                            key={coffeeSize.size}
                            size={coffeeSize.size}
                            value={coffeeSize.size}
                            image={{
                                src: coffee,
                                alt: coffeeSize.size,
                                height: coffeeSize.imgHeight,
                            }
                            }
                            isSelected={size === coffeeSize.size}
                            onSelect={this.onSelect}
                            type="size"
                        />;
                    })}
                </InputGroup>
                <InputGroup>
                    {coffeeTypes.map((coffeeType) => {
                        return <Radio
                            key={coffeeType.name}
                            value={coffeeType.value}
                            label={coffeeType.value}
                            isSelected={type === coffeeType.value}
                            onSelect={this.onSelect}
                            type="type" />;
                    })}
                </InputGroup>
                <InputGroup>
                    {milkTypes.map((milkType) => {
                        return <Radio
                            key={milkType.name}
                            value={milkType.value}
                            isSelected={milk === milkType.value}
                            onSelect={this.onSelect}
                            label={milkType.value}
                            type="milk"
                        />;
                    })}
                </InputGroup>
                <Button text="Place order" type="submit" onClick={this.onSubmit} />
            </form>
        );
    }
}

Form.propTypes = {
    placeOrder: PropTypes.func,
};

export default Form;
