import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18n from '../lang';

export const renderRouter = (children) => render(
    <StaticRouter context={{}}>
        {children}
    </StaticRouter>
);

export const renderStore = (children, store) => render(
    <Provider store={store}>
        {children}
    </Provider>
);

export const renderIntl = (children) => render(
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
);
