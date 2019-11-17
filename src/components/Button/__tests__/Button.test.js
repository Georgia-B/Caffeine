import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Button from '../Button';

describe('Components | <Button />', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Button
            text="Click me"
            type="submit"
            onClick={() => true}
        />);

        expect(component.asFragment()).toMatchSnapshot();
    });
});
