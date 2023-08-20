import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Display from './UserDisplay';
import {useNavigate} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/users";

const ViewUser = () => {
    const [users, setUsers] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url).then((res) => {setUsers(res.data)})
    },[])

    if(sessionStorage.getItem('ltk') === null){
        navigate('/')
    }
    if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin' ){
        navigate('/profile?message=You are not an Admin')
    }else{
        return(
            <>
                <Display userData={users}/>
            </>
        )
    }
    
}


export default ViewUser