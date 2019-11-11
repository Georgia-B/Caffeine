import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SizeRadio from '../SizeRadio/SizeRadio';
import TypeRadio from '../TypeRadio/TypeRadio';
import MilkRadio from '../MilkRadio/MilkRadio';
import InputGroup from '../InputGroup/InputGroup';
import './Form.css';

const coffeeSizes = [
    { size: 'small', imgHeight: 30 },
    { size: 'medium', imgHeight: 40 },
    { size: 'large', imgHeight: 50 },
];

const coffeeTypes = [
    { value: 'cappuccino', name: 'Cappuccino' },
    { value: 'flatwhite', name: 'Flat White' },
    { value: 'latte', name: 'Latte' },
    { value: 'longblack', name: 'Long Black' },
    { value: 'shortblack', name: 'Short Black' },
    { value: 'americano', name: 'Americano' },
];

const milkTypes = [
    { value: 'almond', name: 'Almond' },
    { value: 'coconut', name: 'Coconut' },
    { value: 'soy', name: 'Soy' },
    { value: 'regular', name: 'Regular' },
    { value: 'skim', name: 'Skim' },
];

class Form extends Component {
    constructor() {
        super();
        this.state = {
            size: 'medium',
            type: null,
            milk: 'soy',
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
            this.props.placeOrder(order);
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
                    {coffeeSizes.map((coffeeSize) => {
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
                            value={coffeeType.value}
                            name={coffeeType.name}
                            isSelected={type === coffeeType.value}
                            onSelect={this.onSelect} />;
                    })}
                </InputGroup>
                <InputGroup>
                    {milkTypes.map((milkType) => {
                        return <MilkRadio
                            key={milkType.value}
                            value={milkType.value}
                            name={milkType.name}
                            isSelected={milk === milkType.value}
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
