import React from 'react';
import SingleOrder from './SingleOrder';
import Checkout from '../Checkout/Checkout';
import {connect} from 'react-redux';
const Order = ({cartItems,incrementitemqun,decrementitemqun,deleteitem,total}) => {
    return (
        <React.Fragment>
        <section id="cart_items" className="order">
            <div className="container">
                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                        <thead>
                            <tr className="cart_menu">
                                <td className="image">Item</td>
                                <td className="description"></td>
                                <td className="price">Price</td>
                                <td className="quantity">Quantity</td>
                                <td className="total">Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item,index) => {
                                    const key = Object.keys(item);
                                    return <SingleOrder  
                                    key={key[0]} 
                                    incrementitemqun={() => incrementitemqun(key[0],index)} 
                                    decrementitemqun={() => decrementitemqun(key[0],index)} 
                                    deleteitem={() => deleteitem(index)}
                                    item={item[key[0]]}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <Checkout total={total} />
        </React.Fragment>
    );
};

const mapState = state => {
    return {
        cartItems:state.cart.cartItems,
        total:state.cart.total
    }
}
const mapDispatch = dispatch => {
    return {
        incrementitemqun:(idforincrement,indexforincrement) => 
            dispatch({type:'IncrementItemQuantity',payload:{idforincrement,indexforincrement}}),
        decrementitemqun:(idfordecrement,indexfordecrement) => 
            dispatch({type:'DecrementItemQuantity',payload:{idfordecrement,indexfordecrement}}),
        deleteitem:(indexfordelete) => dispatch({type:'DeleteItem',payload:{indexfordelete}})
    }
}
export default connect(mapState,mapDispatch)(Order);