import React,{Component} from 'react';
import './placeOrder.css';

const base_url = process.env.REACT_APP_BASE_URL;
const purl = "http://localhost:9112/orders"

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*10000),
            rest_name:this.props.match.params.restName,
            name:'Nikita',
            email:'nikki@gmail.com',
            cost:0,
            phone:'9876543211',
            address:'U Block Delhi',
            menuItem:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItem" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    PlaceOrder = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu')
        console.log(obj);
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewOrder'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order from the rest {this.state.rest_name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Name</label>
                                <input className="form-control" name="name"
                                value={this.state.name}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Email</label>
                                <input className="form-control" name="email"
                                value={this.state.email}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Phone</label>
                                <input className="form-control" name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address</label>
                                <input className="form-control" name="address"
                                value={this.state.address}
                                onChange={this.handleChange}/>
                            </div>
                            {this.renderMenu(this.state.menuItem)}
                            <div className='row'>
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className='btn btn-success' onClick={this.PlaceOrder}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //calling post api 
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(`${base_url}/menuItem`,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseFloat(item.menu_price);
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }


}


export default PlaceOrder;