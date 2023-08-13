import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import ListingApi from './listing/ListingApi';
import Details from './Details/details';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={ListingApi}/>
            <Route path="/details" component={Details}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewOrder" component={ViewOrder}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing