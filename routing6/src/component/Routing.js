import React from 'react';
import {BrowserRouter, Route, Routes}  from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import Main from './Main';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="post" element={<Post/>}/>
                    <Route path="post/:topic" element={<PostDetails/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing