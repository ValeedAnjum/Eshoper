import React from 'react';
import Login from './Login';
import Signup from './Signup';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
const Auth = ({auth}) => {
	if(auth){
		return <Redirect to="/" />
	}
    return (
        <section id="form">
		<div className="container">
			<div className="row">
				<div className="col-sm-4 col-sm-offset-1">
					<Login />
				</div>
				<div className="col-sm-1">
					<h2 className="or">OR</h2>
				</div>
				<div className="col-sm-4">
					<Signup />
				</div>
			</div>
		</div>
	</section>
    );
};

const mapState = state => {
	return {
		auth:state.firebase.auth.uid
	}
}

export default connect(mapState)(Auth);