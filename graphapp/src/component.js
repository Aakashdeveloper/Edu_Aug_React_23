import React from 'react';
import {useQuery} from '@apollo/client';
import { GET_DATA } from './graphql';

const MyComponent = () => {
    const {loading,error,data} = useQuery(GET_DATA, {
        variables: {id:3}
      })

    if(loading) return <p>Loading....</p>
    if(error) return <p>error....</p>

    return(
        <div>
            <h2>{data.Products.product_name}</h2>
            <h2>{data.Products.category}</h2>
            <h2>{data.Products.Price}</h2>
        </div>
    )
}

export default MyComponent


