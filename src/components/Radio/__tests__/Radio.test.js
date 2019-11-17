import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderIntl } from '../../../test';
import Radio from '../Radio';

describe('Components | <Radio />', () => {
    afterEach(cleanup);
    it('should render correctly with text', () => {
        const component = renderIntl(<Radio
            value="Hello"
            onSelect={() => true}
            isSelected={false}
            image={null}
            type="test"
        />);

        expect(component.asFragment()).toMatchSnapshot();
    });

    it('should render correctly with image', () => {
        const component = renderIntl(<Radio
            value="Hello"
            onSelect={() => true}
            isSelected={false}
            image={{
                src: '/image.png',
                alt: 'helloimage',
                height: '30',
            }}
            type="test"
        />);

        expect(component.asFragment()).toMatchSnapshot();
    });

    it('should render correctly when selected', () => {
        const component = renderIntl(<Radio
            value="Hello"
            onSelect={() => true}
            isSelected={true}
            image={null}
            type="test"
        />);

        expect(component.asFragment()).toMatchSnapshot();
    });
});
