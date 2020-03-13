import React,{Component} from 'react';
import Category from '../Sidebar/Category';
import Brand from '../Sidebar/Brand';
import SingleProduct from './SingleProduct';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { loadNextItems, searchByCatagory } from '../../store/Action/UserActions';
import ProductLoadingPlaceholder from './ProductLoadingPlaceholder';

class Product extends Component {
    state = {
        loadedItems:[],
        moreItems:false,
        previousItems:[],
        morePrevItems:false,
    }
    async componentDidMount(){
        let next = await this.props.LoadNextItems();
        if(next && next.docs && next.docs.length >= 1){
            this.setState({
                loadedItems:this.props.items,
                moreItems:true
            })
        }
    }
    loadNextItem = async () => {
        const {items} = this.props;
        const lastItem = items && items[items.length-1];
        const previousItems = [...this.state.loadedItems];
        const next = await this.props.LoadNextItems(lastItem);
        if(next && next.docs && next.docs.length < 1){
            this.setState({
                moreItems:false,
                morePrevItems:true,
            })
        }else{
            this.setState({
                loadedItems:[...this.props.items],
                previousItems:[...this.state.previousItems,...previousItems],
                morePrevItems:true,
            })
        }
    }
    loadPrevItem = async (e) => {
        e.preventDefault();
        let copyOfPreviosItems = [...this.state.previousItems];
        let previousItemsToDisplay = [];
        let lengthOfPrevItems = copyOfPreviosItems.length;
        for(let i = 0;i<6;i++){
            previousItemsToDisplay.push({...copyOfPreviosItems[lengthOfPrevItems-6+i]});
        }
        copyOfPreviosItems.splice(copyOfPreviosItems.length-6,6);
        this.props.PreviousItems(previousItemsToDisplay);
        this.setState({
            loadedItems:[...previousItemsToDisplay],
            previousItems:[...copyOfPreviosItems],
            moreItems:true
        })
        if(copyOfPreviosItems.length <= 1) {
            this.setState({morePrevItems:false});
        }
    }
    goToProductDetial = id => {
        this.props.history.push('/details/'+id);
    }
    searchByCatagoryLocal = async (name) => {
        const previousItems = [...this.state.loadedItems];
        const next = await this.props.SearchByCatagory(name);
        if(next && next.docs && next.docs.length < 1){
            this.setState({
                moreItems:false,
                morePrevItems:false
            })
        }else{
            this.setState({
                loadedItems:[...this.props.items],
                previousItems:[...this.state.previousItems,...previousItems],
                morePrevItems:false,
                moreItems:true
            })
        }
    }
    nextBtn = (e) => {
        e.preventDefault();
        this.loadNextItem(this.state.brandNameForSearching);
    }
    render() {
        const {loadedItems,moreItems,morePrevItems} = this.state;
        const {loading} = this.props;
        return (
            <div className="container Product">
            <div className="row">
                <div className="col-sm-3">
                    <div className="left-sidebar">
                        <Category searchByCatagory={this.searchByCatagoryLocal}/>
                        <Brand searchByCatagory={this.searchByCatagoryLocal}/>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="features_items">
                        <h2 className="title text-center">
                            feature items
                        </h2>
                        {/* loding effect */}
                        {
                        loading &&
                        <div className="ph-item">
                        {
                            [1,2,3,4,5,6].map((ele,index) => {
                                return <ProductLoadingPlaceholder key={index} />
                            })
                        }
                        </div>
                        }
                        {/* loding effect end */}
                        {/* loading items */}
                        {
                            
                            loadedItems && !loading && loadedItems.map((item,index) => {
                                return (
                                    <SingleProduct 
                                    item={item} 
                                    key={index}
                                    goToProductDetial={() => this.goToProductDetial(item.id)}/>
                                );
                            })
                        }
                        {/* loading items end */}
                    </div>
                        <div className="btnCon" style={{textAlign:'center'}}>
                        {
                            morePrevItems &&
                            <a type="button" href="#next" className="btn btn-default get" onClick={this.loadPrevItem}>Prev</a>
                        }
                        {
                            moreItems && 
                            <a  href="#prev" type="button" className="btn btn-default get" 
                            onClick={this.nextBtn}>Next</a> 
                        }
                        </div>                   
                </div>
            </div>
        </div>
        )
    }
}

const mapState = state => {
    return {
        items:state.items.items,
        loading:state.items.loading
    }
}
const mapDispatch = dispatch => {
    return {
        LoadNextItems:(lastItem) => dispatch(loadNextItems(lastItem)),
        PreviousItems:resetingItems => dispatch({type:'ItemsReset',payload:resetingItems}),
        SearchByCatagory:name => dispatch(searchByCatagory(name))
    }
}

export default compose(
    connect(mapState,mapDispatch),
    withRouter
)(Product);