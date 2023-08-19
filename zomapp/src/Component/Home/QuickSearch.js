import React,{useEffect,useState} from 'react';
import './QuickSearch.css';
import QuickDsiplay from './QuickDisplay';

const base_url = process.env.REACT_APP_BASE_URL

function QuickSearch(){
    const [mealType,setMealType] = useState()

    useEffect(() => {
        fetch(`${base_url}/quicksearch`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setMealType(data)
        })
    })

    return(
        <div className='quickSearch'>
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By MealType
                </span>
                <div>
                    <QuickDsiplay mealData={mealType}/>
                </div>
        </div>
    )

}

export default QuickSearch;