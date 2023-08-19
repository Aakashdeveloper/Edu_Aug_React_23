import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const lurl = "http://3.17.216.66:5000/api/auth/login"


function Login(){

    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        email:'arpit1@gmail.com',
        password:'12345678'
    })
    const [message,setMessage]= useState()

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    function handleSubmit(){
        fetch(lurl,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate('/profile')
            }
        })
    }

    return(
        <>
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>Login</h3>
                    </div>
                    <div className="panel-body">
                        <h2 style={{color:'red'}}>{message}</h2>
                        <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" name="email"
                                    value={formData.email}
                                    onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <input className="form-control" name="password"
                                    value={formData.password}
                                    onChange={handleChange}/>
                                </div>
                                <div>
                                    <button className="btn btn-danger"
                                    onClick={handleSubmit}>
                                        Login
                                    </button>
                                </div>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login