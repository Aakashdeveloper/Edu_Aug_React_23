export default function(state={}, action){
    switch(action.type){
        case 'GET_MOVIES':
            return {...state, loading:true};
        case 'MOVIES_LIST':
            return {...state, movies:action.json, loading:false}
        default:
            return state
    }
}