import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing