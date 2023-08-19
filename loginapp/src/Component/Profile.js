import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo";

function Profile(){

    const [user,setUser]  = useState();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setUser(data)
        })
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('rtk')
        sessionStorage.removeItem('ltk')
        navigate('/')
    }


    const renderData = (data) => {
        if(data){
            sessionStorage.setItem('rtk',data.role)
            return(
                <>
                    <h1>Hi {data.name}</h1>
                    <h2>Your Email id is {data.email}</h2>
                    <h2>Your Phone Number is {data.phone}</h2>
                    <h2>Your Role is {data.role}</h2> 
                    
                </>
            )
            
        }
    }

    const conditionalRender = (data) => {
        if(data){
            if(data.role === "Admin"){
                return(
                    <Link to="/users" className='btn btn-success'>
                        Users
                    </Link> 
                )
            }
        }
    }
 
    return(
        <div className="container">
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3>Profile</h3>
                </div>
                <div className="panel-body">
                    {renderData(user)}
                    {conditionalRender(user)} &nbsp;
                    <button className="btn btn-danger"
                    onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile;