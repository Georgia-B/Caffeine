import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import SizeRadio from '../SizeRadio/SizeRadio';
import TypeRadio from '../TypeRadio/TypeRadio';
import MilkRadio from '../MilkRadio/MilkRadio';
import InputGroup from '../InputGroup/InputGroup';

import { milkTypes, coffeeTypes, sizeTypes } from '../../constants';
import './Form.css';

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
            <form className="order__form">
                <InputGroup>
                    {sizeTypes.map((coffeeSize) => {
                        return <SizeRadio
                            key={coffeeSize.size}
                            size={coffeeSize.size}
                            imgHeight={coffeeSize.imgHeight}
                            isSelected={size === coffeeSize.size}
                            onSelect={this.onSelect} />;
                    })}
                </InputGroup>
                <InputGroup>
                    {coffeeTypes.map((coffeeType) => {
                        return <TypeRadio
                            key={coffeeType.value}
                            value={coffeeType.name}
                            name={coffeeType.name}
                            isSelected={type === coffeeType.name}
                            onSelect={this.onSelect} />;
                    })}
                </InputGroup>
                <InputGroup>
                    {milkTypes.map((milkType) => {
                        return <MilkRadio
                            key={milkType.value}
                            value={milkType.name}
                            name={milkType.name}
                            isSelected={milk === milkType.name}
                            onSelect={this.onSelect}
                        />;
                    })}
                </InputGroup>
                <button type="submit" className="order__button" onClick={this.onSubmit}>Place order</button>
            </form>
        );
    }
}

Form.propTypes = {
    placeOrder: PropTypes.func,
};

export default Form;
