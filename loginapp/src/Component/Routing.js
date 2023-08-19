import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './login';
import Register from './Register';
import Profile from './Profile';
import UserList from './UserList';
import Main from './Main';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="users" element={<UserList/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing