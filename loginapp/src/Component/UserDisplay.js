import React from 'react';

const DisplayUser = (props) => {

    const renderTable = ({userData}) => {
        if(userData){
            return userData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Users</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}


export default DisplayUser