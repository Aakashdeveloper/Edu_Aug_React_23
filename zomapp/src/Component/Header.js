import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel  <Link className="btn btn-info" to="/">Home</Link>
                </div>
                <div id="social">
                    
                </div>
            </header>
        )
    }
}

export default Header