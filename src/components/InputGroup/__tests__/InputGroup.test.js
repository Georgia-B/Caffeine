import React from 'react';
import { cleanup, render } from '@testing-library/react';
import InputGroup from '../InputGroup';

describe('Components | <InputGroup />', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<InputGroup><div>Hello World</div></InputGroup>);

        expect(component.asFragment()).toMatchSnapshot();
    });
});
