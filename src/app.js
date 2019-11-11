import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';

const App = () => {
    return <Router>
        <Switch>
            <Route path="/order">
                <OrderPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
    </Router>;
};

export default App;
