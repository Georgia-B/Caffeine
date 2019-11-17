import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { renderRouter } from '../../../test';
import Header from '../Header';

describe('Components | <Header />', () => {
    afterEach(cleanup);
    it('should render correctly without action', () => {
        const component = render(<Header
            title="Hello World"
        />);

        expect(component.asFragment()).toMatchSnapshot();
    });

    it('should render correctly with action', () => {
        const component = renderRouter(
            <Header
                title="Hello World"
                action={{ to: '/', label: 'Click me' }}
            />);

        expect(component.asFragment()).toMatchSnapshot();
    });
});
