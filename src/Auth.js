import React, { Component } from 'react';
import Landing from './components/pages/Landing/Landing';

function Auth(ComposedComponent) {
    class Authentication extends Component {
        render() {
            if (localStorage.getItem('usertoken')) {
                return <ComposedComponent {...this.props} />;
            } else {
                return <Landing />;
            }
        }
    }

    return Authentication;
}

export default Auth;
