import {gql} from '@apollo/client';

export const GET_DATA = gql`
    query Product($id:Int){
        Products(id: $id){
            product_name,
            category,
            Price
        }
    }
`