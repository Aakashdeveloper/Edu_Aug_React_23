// we are connecting action to reducer
export default function(state=null,action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        default:
            return null
    }
}