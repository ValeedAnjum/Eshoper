import React,{Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { loadItemDetails, addToCart } from '../../store/Action/UserActions';
import Details from './Details';
import DetailsLoadingPlaceholder from './DetailsLoadingPlaceholder';
class DetialsProduct extends Component {
    state = {
        detailsOfItem:null
    }
    async componentDidMount(){
       await this.props.LoadItemDetails(this.props.match.params.id);
       this.setState({
        detailsOfItem:this.props.details
       })

    }
    render() {
        const {AddToCart,cartitemskeys} = this.props;
        return (
            <div className="container DetialsProduct">
            <div className="row">
                <div className="col-sm-12">
                    {
                        (this.state.detailsOfItem === null) ? <DetailsLoadingPlaceholder/>:
                        <Details
                        AddToCart={AddToCart}
                        cartitemskeys={cartitemskeys}
                        detailsOfItem={this.state.detailsOfItem}/>
                    }
                </div>
            </div>
        </div>
        )
    }
}

const mapState = state => {
    return {
        details:state.items.detailOfItem,
        cartitemskeys:state.cart.cartItemsKeys
    }
}
const mapDispatch = dispatch => {
    return {
        LoadItemDetails:itemid => dispatch(loadItemDetails(itemid)),
        AddToCart:item => dispatch(addToCart(item))
    }
}
export default compose(
    withRouter,
    connect(mapState,mapDispatch)
)(DetialsProduct);