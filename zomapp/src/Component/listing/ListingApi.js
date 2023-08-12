import React,{Component} from 'react';
import ListingDisplay from './listingDisplay'
import './listing.css';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

class Listing extends Component{

    constructor(props){
        super(props)

        this.state={
            restaurantList:'',
            mealId:this.props.match.params.mealId
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">

                        </div>
                        <ListingDisplay restList={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let mealId = this.state.mealId;
        sessionStorage.setItem('mealId', mealId);
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) => this.setState({restaurantList:res.data}))
    }

}

export default Listing