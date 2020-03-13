import React from 'react';

const Category = ({searchByCatagory}) => {
    const SearchByCatagory = e => {
        e.preventDefault();
        searchByCatagory(e.target.innerHTML.toString());
    }
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
                                    <a href="#nike" onClick={SearchByCatagory}>Nike
                                    </a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Under Armour
                                    </a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Adidas
                                    </a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Puma</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>ASICS
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
                                    <a href="#nourl" onClick={SearchByCatagory}>Fendi</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Guess</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Valentino</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Dior</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Versace</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Armani</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Prada</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Dolce and Gabbana</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Chanel</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Gucci</a>
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
                                    <a href="#nourl" onClick={SearchByCatagory}>Fendi</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Guess</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Valentino</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Dior</a>
                                </li>
                                <li>
                                    <a href="#nourl" onClick={SearchByCatagory}>Versace</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Kids</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Fashion</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Households</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Interiors</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Clothing</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Bags</a>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href="#nourl" onClick={SearchByCatagory}>Shoes</a>
                        </h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Category;