import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Logout } from '../../store/Action/AuthActions';
const Usermenu = ({name,logout}) => {
    const authHandling = () => {
        if(name){
            logout();
        }
    }
    return (
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 clearfix">
                        <div className="logo pull-left">
                                <Link to="/cart">
                                <img src="images/home/logo.png" alt=""/>
                                </Link>
                        </div>
                        <div className="btn-group pull-right clearfix">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle usa"
                                    data-toggle="dropdown">
                                    USA
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#nourl" onClick={e => e.preventDefault()}>Canada</a>
                                    </li>
                                    <li>
                                        <a href="#nourl" onClick={e => e.preventDefault()}>UK</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle usa"
                                    data-toggle="dropdown">
                                    DOLLAR
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#nourl" onClick={e => e.preventDefault()}>Canadian Dollar</a>
                                    </li>
                                    <li>
                                        <a href="#nourl" onClick={e => e.preventDefault()}>Pound</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 clearfix">
                        <div className="shop-menu clearfix pull-right">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-user"></i>
                                        {
                                            name ? name:"Account"
                                        }
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        Cart
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/auth" onClick={authHandling}>
                                        {
                                            name ? null:<i className="fa fa-lock"></i>
                                        }
                                        {
                                            name ? "Logout":"Login"
                                        }
                                        
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatch = dispatch => {
    return {
        logout:() => dispatch(Logout())
    }
}
const mapState = state => {
    return {
        name:state.firebase.profile.name
    }
}
export default connect(mapState,mapDispatch)(Usermenu);