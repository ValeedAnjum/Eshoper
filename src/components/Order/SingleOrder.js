import React from 'react';

const SingleOrder = ({item,incrementitemqun,decrementitemqun,deleteitem}) => {
    const {name,proid,price,proimg,quantity,totoal} = item;
    return (
        <tr>
            <td className="cart_product">
                <a href="#nourl"><img src={`/${proimg}`} alt=""/></a>
            </td>
            <td className="cart_description">
                <h4>
                    <a href="#nourl">{name}</a>
                </h4>
                <p>Web ID: {proid}</p>
            </td>
            <td className="cart_price">
                <p>${price}</p>
            </td>
            <td className="cart_quantity">
                <div className="cart_quantity_button">
                    <a className="cart_quantity_up" href="#nourl" onClick={incrementitemqun}>
                        +
                    </a>
                    <input
                        onChange={() => {return}}
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value={quantity}
                        autoComplete="off"
                        size="2"/>
                    <a className="cart_quantity_down" href="#nourl" onClick={decrementitemqun}>
                        -
                    </a>
                </div>
            </td>
            <td className="cart_total">
                <p className="cart_total_price">${totoal}</p>
            </td>
            <td className="cart_delete">
                <a className="cart_quantity_delete" href="#nourl" onClick={deleteitem}>
                    <i className="fa fa-times"></i>
                </a>
            </td>
        </tr>
    );
};

export default SingleOrder;