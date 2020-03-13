import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Contactbar from './components/ContactBar/Contactbar';
import Usermenu from './components/UserMenu/Usermenu';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Order from './components/Order/Order';
import Contact from './components/Contact/Contact';
import DetialsProduct from './components/DetailsProduct/DetialsProduct';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ModelManager from './components/ModelManager/ModelManager';

function App() {
  return (
    <BrowserRouter>
      <ModelManager/>
      <ScrollToTop>
        <Contactbar />
        <Usermenu />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/cart" component={Order} />
          <Route path="/contact" component={Contact} />
          <Route path="/details/:id" component={DetialsProduct} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
