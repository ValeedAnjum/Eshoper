import React,{useState} from 'react';
import Category from './SideBar/Category';
import Brand from './SideBar/Brand';
import Price from './SideBar/Price';
import SingleProduct from './SingleProduct';
const Product = () => {
    const [items] = useState([1,2,3,4,5,6]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="left-sidebar">
                        <Category />
                        <Brand />
                        <Price />
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="features_items">
                        <h2 className="title text-center">
                            feature items
                        </h2>
                        {
                            items.map((item,index) => {
                                return (
                                    <SingleProduct item={item} key={index} />
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;