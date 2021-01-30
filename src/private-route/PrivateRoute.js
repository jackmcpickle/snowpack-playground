import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppContext } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [{ authState }] = useAppContext();

    return (
        <Route
            render={() => (authState.isAuthenticated === true ? <Component {...rest} /> : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;
