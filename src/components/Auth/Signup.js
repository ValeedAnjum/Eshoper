import React from 'react';
import {combineValidators,isRequired,hasLengthBetween,composeValidators,hasLengthGreaterThan} from 'revalidate';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import TextInput from '../Form/Common/Textinput';
import { Register } from '../../store/Action/AuthActions';
const validate = combineValidators({
    name:isRequired({message:'Name is required'}),
    email:isRequired({message:'Email is required'}),
    password:isRequired({message:'Password is required'})
})
const Signup = (props) => {
    const submit = val => {
        props.Signup(val);
    }
    return (
        <div className="signup-form">
            <h2>New User Signup!</h2>
            {/* <form action="#">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button type="submit" className="btn btn-default">Signup</button>
            </form> */}
            <form onSubmit={props.handleSubmit(submit)}>
                <Field name="name" component={TextInput} type="text" placeholder="Name" />
                <Field name="email" component={TextInput} type="email" placeholder="Email" />
                <Field name="password" component={TextInput} type="password" placeholder="password" />
                <button type="submit" className="btn btn-default">Signup</button>
            </form>
        </div>
    );
};

const mapDispatch = dispatch => {
    return {
        Signup:cred => dispatch(Register(cred))
    }
}
// export default Signup;
export default connect(null,mapDispatch)(reduxForm({form:'SignupForm',validate})((Signup)));
