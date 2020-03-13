import React,{useState} from 'react';

const Details = ({detailsOfItem,AddToCart,cartitemskeys}) => {
    const [qun, setqun] = useState(1);
    const {availability,brand,condition,name,price,proid,proimg,proimages} = detailsOfItem;
    let inCart = false;
    if(cartitemskeys.indexOf(proid) !== -1){
        inCart = true;
    }
    const qunatityHandler = e => {
        let newValue = e.target.value;
        if(newValue === ""){
            newValue = 1;
        }
        if(newValue > 100){
            newValue = 100;
        }
        setqun(newValue);
    }
    return (
        <div className="product-details">
            <div className="col-sm-5">
                <div className="view-product">
                    <img src={`/${proimg}`} alt=""/>
                </div>
                <div id="similar-product" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="item active">
                            <a href="#nourl"><img src={`/${proimages[0]}`} alt=""/></a>
                            <a href="#nourl"><img src={`/${proimages[1]}`} alt=""/></a>
                            <a href="#nourl"><img src={`/${proimages[2]}`} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href="#nourl"><img src={`/${proimages[2]}`} alt=""/></a>
                            <a href="#nourl"><img src={`/${proimages[0]}`} alt=""/></a>
                            <a href="#nourl"><img src={`/${proimages[1]}`} alt=""/></a>
                        </div>
                        <div className="item">
                            <a href="#nourl"><img src={`/${proimages[1]}`} alt=""/></a>
                            <a href="#nourl"><img src={`/${proimages[2]}`} alt=""/></a>
                            <a href="#nourl"><img src={`/${proimages[0]}`} alt=""/></a>
                        </div>

                    </div>
                    <a className="left item-control" href="#similar-product" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="right item-control" href="#similar-product" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>

            </div>
            <div className="col-sm-7">
                <div className="product-information">
                    {
                        (condition === 'new') ? 
                        <img src="/images/product-details/new.jpg" className="newarrival" alt=""/>:
                        null
                    }
                    <h2>{name}</h2>
                    <p>Web ID: {proid}</p>
                    <img src="images/product-details/rating.png" alt=""/>
                    <span>
                        <span>US ${price}</span>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            max="100"
                            min="1"
                            value={qun}
                            onChange={qunatityHandler}
                            />
                        {
                            inCart ? 
                            <button type="button" className="btn btn-fefault cart">
                                <i className="fa fa-shopping-cart"></i>
                                Added
                            </button>
                            :
                            <button type="button" className="btn btn-fefault cart" onClick={() => AddToCart({quantity:qun,...detailsOfItem})}>
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        }
                    </span>
                    <p>
                        <b>Availability:</b>
                        {availability}</p>
                    <p>
                        <b>Condition:</b>
                        {condition}</p>
                    <p>
                        <b>Brand:</b>
                        {brand}</p>
                    <a href="#nourl"><img
                        src="/images/product-details/share.png"
                        className="share img-responsive"
                        alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default Details;