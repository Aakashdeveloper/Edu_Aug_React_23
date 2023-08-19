import React,{useState,useEffect} from 'react';
import DisplayComponent from './DisplayComponent';

const url = "http://3.17.216.66:4000/restaurants"

function HooksComponent(){

    const [title] = useState('Hooks App');
    const [count,abc] = useState(0)
    const [count1,setCount1] = useState(0);
    const [restaurants,setRestaurants] = useState([]);

    const updateCount = () => {
        abc(count+1)
    }

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch(url,{method:'GET'});
                const data = await response.json();
                setRestaurants(data)
            } catch(error){
                setRestaurants([])
            }
        }
        fetchData()
    },[count])


    // useEffect(() => {
    //     fetch(url,{method:'GET'})
    //     .then((res) =>  res.json())
    //     .then((data) => {
    //         setRestaurants(data)
    //         console.log(data)
    //     })
    //     console.log('inside useeffect')
    // },[count])

    return(
        <>
            <h1>{title}</h1>
            <h3>{count}</h3>
            <button onClick={updateCount}>
                Counter1
            </button>
            <h3>{count1}</h3>
            <button onClick={() => {setCount1(count1+1)}}>
                Counter1
            </button>
            <DisplayComponent restData={restaurants}/>
        </>
    )
}

export default HooksComponent;