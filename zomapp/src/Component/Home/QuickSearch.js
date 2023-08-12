import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDsiplay from './QuickDisplay';

const base_url = process.env.REACT_APP_BASE_URL
class QuickSearch extends Component{

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){

        return(
            <div className='quickSearch'>
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By MealType
                </span>
                <div>
                    <QuickDsiplay mealData={this.state.mealType}/>
                </div>
            </div>
        )
    }

    //api calling on pageload 
    componentDidMount(){
        fetch(`${base_url}/quicksearch`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;