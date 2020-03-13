import React from 'react';
import {combineValidators,isRequired} from 'revalidate';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import Textinput from '../Form/Common/Textinput';
import {Login as LLogin} from '../../store/Action/AuthActions';
const validate = combineValidators({
    email:isRequired({message:'Email is required'}),
    password:isRequired({message:'Password is required'})
})
const Login = (props) => {
    const {login} = props;
    const submitVal = val => {
        login(val);
    }
    return (
        <div className="login-form">
            <h2>Login to your account</h2>
            {/* <form action="#">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email Address"/>
                <span>
                    <input type="checkbox" className="checkbox"/>
                    Keep me signed in
                </span>
                <button type="submit" className="btn btn-default" onClick={() => login('a')}>Login</button>
            </form> */}

            <form onSubmit={props.handleSubmit(submitVal)}>
                <Field name="email" component={Textinput} type="email" placeholder="Email Address"/>
                <Field name="password" component={Textinput} type="password" placeholder="Password"/>
                <button type="submit" className="btn btn-default">Login</button>
            </form>

        </div>
    );
};

const mapDispatch = dispatch => {
    return {
        login:(cred) => dispatch(LLogin(cred))
    }
}
export default connect(null,mapDispatch)(reduxForm({form:'LoginForm',validate})((Login)));
