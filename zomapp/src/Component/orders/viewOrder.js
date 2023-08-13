import React,{Component} from 'react';
import axios from 'axios';
import Display from './displayOrder';

const url = "http://localhost:9112/orders";

class ViewOrder extends Component {

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Display orderData={this.state.orders}/>
            </>
        )
    }

    //api calling 
    componentDidMount(){
        axios.get(url).then((res) =>  this.setState({orders:res.data}))
    }


}

export default ViewOrder;