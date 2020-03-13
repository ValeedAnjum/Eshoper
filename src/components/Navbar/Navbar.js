import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="mainmenu pull-left">
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#nourl" onClick={e => e.preventDefault()}>Shop<i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul role="menu" className="sub-menu">
                                        <li>
                                            <Link to="/cart">
                                                Cart
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/auth">
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="search_box pull-right">
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;