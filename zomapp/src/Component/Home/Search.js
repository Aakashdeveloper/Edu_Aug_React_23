import React,{Component} from 'react';
import './Search.css';

const base_url = "http://3.17.216.66:4000"

class Search extends Component{

    constructor(){
        super()
        console.log("inside constructor")
        this.state={
            location:[],
            restaurants:[]
        }
    }

    renderCity = (data) => {
        console.log("inside renderCity")
        console.log(data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(">>>>",event.target.value)
        let stateId = event.target.value 
        fetch(`${base_url}/restaurant?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({restaurants:data})
        })
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }


    render(){
        console.log("inside render")
        return(
            <div className='search'>
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Places Near To Me
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="restSelect">
                        <option>----SELECT Restaurants----</option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }

    //api calling on page load 
    componentDidMount(){
        console.log("inside componentDidMount")
        fetch(`${base_url}/location`,{method:'GET'})
        //return promise
        .then((res) => res.json())
        // return data
        .then((data) => {
            //console.log(data)
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })

    }
}

export default Search;