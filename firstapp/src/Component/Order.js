import React,{Component} from 'react';

class Orders extends Component {
    state={
        data:{
            Orders:{
                order_name:"Sample Order",
                category:"Sample Category",
                price:140
            }
        }
    }

    render(){
     const {order_name,category,price} = this.state.data.Orders;
     return(
        <div>
            <h2>{order_name}</h2>
            <h2>{category}</h2>
            <h2>{price}</h2>
        </div>

     )
    }

}

export default Orders