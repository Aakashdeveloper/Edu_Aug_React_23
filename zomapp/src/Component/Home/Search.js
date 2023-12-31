import React,{useEffect,useState} from 'react';
import './Search.css';

const base_url = process.env.REACT_APP_BASE_URL

function Search(){

    const [location,setLocation] = useState()
    const [restaurants,setRestaurant] = useState()

    useEffect(() => {
        fetch(`${base_url}/location`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setLocation(data)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    const handleCity = (event) => {
        let stateId = event.target.value 
        fetch(`${base_url}/restaurant?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            setRestaurant(data)
        })
    }



    const renderRest = (data) => {
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


    return(
        <div className='search'>
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Places Near To Me
                </div>
                <div id="dropdown">
                    <select onChange={handleCity}>
                        <option>----SELECT CITY----</option>
                        {renderCity(location)}
                    </select>
                    <select className="restSelect">
                        <option>----SELECT Restaurants----</option>
                        {renderRest(restaurants)}
                    </select>
                </div>
            </div>
    )

}

export default Search;