import React from 'react';
import Contactbar from '../ContactBar/Contactbar';
import Usermenu from '../UserMenu/Usermenu';
import Navbar from '../Navbar/Navbar';
import Carousal from '../Carousal/Carousal';
import Product from '../Products/Product';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <React.Fragment>
            <Contactbar />
            <Usermenu />
            <Navbar />
            <Carousal/>
            <Product />
            <Footer />
        </React.Fragment>
    );
};

export default Home;