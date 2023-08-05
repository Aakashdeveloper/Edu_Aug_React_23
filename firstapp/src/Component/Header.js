import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()
        console.log("inside constructor")
        this.state={
            keyword:'User Input Here'
        }
    }


    handleChange = (event) => {
        //console.log(event.target.value)
        console.log("inside handleChange")
        this.setState({keyword:event.target.value})
        this.props.userText(event.target.value)
    }

    render(){
        console.log("inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                <hr/>         
            </Fragment> 
        )
    }
}

export default Header;
