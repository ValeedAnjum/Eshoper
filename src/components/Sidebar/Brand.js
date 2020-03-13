import React from 'react';

const Brand = ({searchByCatagory}) => {
	const SearchByCatagory = e => {
        e.preventDefault();
        searchByCatagory(e.target.innerHTML.toString());
    }
    return (
        <React.Fragment>
            <div className="brands_products">
			    <h2>Brands</h2>
			    <div className="brands-name">
			    	<ul className="nav nav-pills nav-stacked">
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Acne</a></li>
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Grüne Erde</a></li>
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Albiro</a></li>
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Ronhill</a></li>
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Oddmolly</a></li>
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Boudestijn</a></li>
			    		<li><a href="#nourl" onClick={SearchByCatagory}>Rösch creative culture</a></li>
			    	</ul>
			    </div>
			</div>
        </React.Fragment>
    );
};

export default Brand;