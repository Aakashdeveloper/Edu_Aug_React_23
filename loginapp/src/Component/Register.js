import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const rurl = "http://3.17.216.66:5000/api/auth/register"


function Register(){

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        role:''
    })

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    function handleSubmit(){
            fetch(rurl,{
                method: 'POST',
                headers:{
                    'accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            .then(navigate('/'))
    }

    return(
        <>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            
                                <div className="col-md-6 form-group">
                                    <label>Name</label>
                                    <input className="form-control" name="name"
                                    value={formData.name}
                                    onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" name="email"
                                    value={formData.email}
                                    onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <input className="form-control" name="password"
                                    value={formData.password}
                                    onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Role</label>
                                    <input className="form-control" name="role"
                                    value={formData.role}
                                    onChange={handleChange}/>
                                </div>
                                <div>
                                    <button className="btn btn-primary"
                                    onClick={handleSubmit}>
                                        Register
                                    </button>
                                </div>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register