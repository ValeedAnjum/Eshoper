import React from 'react';

const Category = () => {
    return (
        <React.Fragment>
            <h2>category</h2>
            <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordian"
                                href="#sportswear"
                                className="collapsed">
                                <span className="badge pull-right">
                                    <i className="fa fa-plus"></i>
                                </span>
                                Sportswear
                            </a>
                        </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse" style={{height: '0px'}}>
                        <div className="panel-body">
                            <ul>
                                <li>
                                    <a href="#nourl">Nike
                                    </a>
                                </li>
                                <li>
                                    <a href="#nourl">Under Armour
                                    </a>
                                </li>
                                <li>
                                    <a href="#nourl">Adidas
                                    </a>
                                </li>
                                <li>
                                    <a href="#nourl">Puma</a>
                                </li>
                                <li>
                                    <a href="#nourl">ASICS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordian"
                                href="#mens"
                                className="collapsed">
                                <span className="badge pull-right">
                                    <i className="fa fa-plus"></i>
                                </span>
                                Mens
                            </a>
                        </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse" style={{height: '0px'}}>
                        <div className="panel-body">
                            <ul>
                                <li>
                                    <a href="#nourl">Fendi</a>
                                </li>
                                <li>
                                    <a href="#nourl">Guess</a>
                                </li>
                                <li>
                                    <a href="#nourl">Valentino</a>
                                </li>
                                <li>
                                    <a href="#nourl">Dior</a>
                                </li>
                                <li>
                                    <a href="#nourl">Versace</a>
                                </li>
                                <li>
                                    <a href="#nourl">Armani</a>
                                </li>
                                <li>
                                    <a href="#nourl">Prada</a>
                                </li>
                                <li>
                                    <a href="#nourl">Dolce and Gabbana</a>
                                </li>
                                <li>
                                    <a href="#nourl">Chanel</a>
                                </li>
                                <li>
                                    <a href="#nourl">Gucci</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordian"
                                href="#womens"
                                className="collapsed">
                                <span className="badge pull-right">
                                    <i className="fa fa-plus"></i>
                                </span>
                                Womens
                            </a>
                        </h4>
                    </div>
                    <div id="womens" className="panel-collapse collapse" style={{height: '0px'}}>
                        <div className="panel-body">
                            <ul>
                                <li>
                                    <a href="#nourl">Fendi</a>
                                </li>
                                <li>
                                    <a href="#nourl">Guess</a>
                                </li>
                                <li>
                                    <a href="#nourl">Valentino</a>
                                </li>
                                <li>
                                    <a href="#nourl">Dior</a>
                                </li>
                                <li>
                                    <a href="#nourl">Versace</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Kids</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Fashion</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Households</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Interiors</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Clothing</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Bags</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl">Shoes</a>
                        </h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Category;