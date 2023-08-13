import React from 'react';

const DisplayOrder = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.rest_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.cost}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>RName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}


export default DisplayOrder;