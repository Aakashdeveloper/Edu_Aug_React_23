import React,{useState,useEffect} from 'react';

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
        fetch(url,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setRestaurants(data)
            console.log(data)
        })
        console.log('inside useeffect')
    },[count])

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
        </>
    )
}

export default HooksComponent;