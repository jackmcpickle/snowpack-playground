import React, { useState } from 'react';
import { registerUser, getUsers } from '../UserFunctions/userFunctions';
import { checkFormFields } from './checkFormFields';

function Register(props) {
    const [registerState, setRegisterState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        errors: {},
        formIsValid: true,
    });

    const handleValidation = () => {
        const [errors, formIsValid] = checkFormFields(registerState);
        setRegisterState({ ...registerState, errors, formIsValid });
    };

    const onChange = (event) => {
        setRegisterState({ ...registerState, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        let errors = {};
        handleValidation();
        event.preventDefault();
        const userData = {
            first_name: registerState.first_name,
            last_name: registerState.last_name,
            email: registerState.email,
            password: registerState.password,
        };
        if (registerState.formIsValid) {
            getUsers().then((data) => {
                console.log(data);

                var destination = data
                    .map((element) => {
                        if (element.email === registerState.email) {
                            console.log('foundmatch');
                            console.log(element.email);
                            return true;
                        }
                    })
                    .filter((item) => {
                        return item;
                    })[0];
                if (!destination) {
                    registerUser(userData).then((res) => {
                        props.history.push('/login');
                    });
                    console.log('Form submitted');
                } else {
                    errors['email'] = 'Email already exists';
                    setRegisterState({ ...registerState, errors: errors });
                }
            });
        } else {
            console.log('Form has errors.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight normal">Please Sign in</h1>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                refs="first_name"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter First Name"
                                value={registerState.first_name}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['first_name']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                refs="last_name"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last Name"
                                value={registerState.last_name}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['last_name']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                refs="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={registerState.email}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['email']}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                refs="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={registerState.password}
                                onChange={onChange}
                            />
                            <span style={{ color: 'red' }}>{registerState.errors['password']}</span>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
