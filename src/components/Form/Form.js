import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { withTranslation } from 'react-i18next';

import InputGroup from '../InputGroup/InputGroup';
import Radio from '../Radio/Radio';
import Button from '../Button/Button';

import { milkTypes, styleTypes, sizeTypes, statusTypes } from '../../constants';
import coffee from '../../res/coffee.png';
import styles from './Form.module.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            size: sizeTypes.small.value,
            style: null,
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

        if (order.size && order.style && order.milk) {
            this.props.placeOrder({
                ...order,
                status: statusTypes.brewing,
                id: uuidv4(),
            });

            this.setState({
                style: null,
                milk: null,
                size: null,
            });
        }

        event.preventDefault();
    }

    render() {
        const { size, style, milk } = this.state;
        const { t } = this.props;

        return (
            <form className={styles.form}>
                <InputGroup>
                    {Object.values(sizeTypes).map((sizeType) => {
                        return <Radio
                            key={sizeType.id}
                            value={sizeType.value}
                            image={{
                                src: coffee,
                                alt: sizeType.id,
                                height: sizeType.imgHeight,
                            }}
                            isSelected={size === sizeType.value}
                            onSelect={this.onSelect}
                            type="size"
                        />;
                    })}
                </InputGroup>
                <InputGroup>
                    {Object.values(styleTypes).map((styleType) => {
                        return <Radio
                            key={styleType}
                            value={styleType}
                            isSelected={style === styleType}
                            onSelect={this.onSelect}
                            type="style" />;
                    })}
                </InputGroup>
                <InputGroup>
                    {Object.values(milkTypes).map((milkType) => {
                        return <Radio
                            key={milkType}
                            value={milkType}
                            isSelected={milk === milkType}
                            onSelect={this.onSelect}
                            type="milk"
                        />;
                    })}
                </InputGroup>
                <Button text={t('form.submit')} type="submit" onClick={this.onSubmit} />
            </form>
        );
    }
}

Form.propTypes = {
    placeOrder: PropTypes.func,
    t: PropTypes.func,
};

export default withTranslation()(Form);
