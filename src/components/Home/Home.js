import React from 'react';
import Carousal from '../Carousal/Carousal';
import Product from '../Products/Product';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <React.Fragment>
            <Carousal/>
            <Product />
            <Footer />
        </React.Fragment>
    );
};

export default Home;