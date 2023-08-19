import React from 'react';

function DisplayComponent(props){

    const renderRest = ({restData}) => {
        if(restData){
            return restData.map((item) => {
                return(
                    <div key={item._id}>
                        {item.restaurant_name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>Restaurants</h2>
                {renderRest(props)}
            </center>
        </div>

    )

}

export default DisplayComponent