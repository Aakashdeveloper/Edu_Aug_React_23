import React from 'react';

const Display = (props) => {

    const renderMovies = ({dataList}) => {
        if(dataList){
            return dataList.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            <h2>Movies</h2>
            {renderMovies(props)}
        </div>
    )

}

export default Display