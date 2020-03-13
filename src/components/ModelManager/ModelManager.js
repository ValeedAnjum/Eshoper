import React from 'react';
import Loader from './Loader/Loader';
import {connect} from 'react-redux';
const ModelManager = (props) => {
    const {name} = props;
    switch (name) {
        case 'Loader':
            return <Loader />
        default:
            return null;
    }
};

const mapState = state => {
    return {
        name:state.auth.modelName
    }
}
export default connect(mapState)(ModelManager);