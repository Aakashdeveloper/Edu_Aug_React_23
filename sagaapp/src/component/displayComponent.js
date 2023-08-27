import React from 'react';

const Display = (props) => {

    const renderView = ({moviesData}) => {
        if(moviesData){
            return moviesData.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }

    return (
        <div>
            <h1>Movies List</h1>
            {renderView(props)}

        </div>
    )
}

export default Display