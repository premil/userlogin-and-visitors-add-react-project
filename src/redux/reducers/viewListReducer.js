//import { GET_ALL_LIST } from "../actions/type";
//import { GET_ALL_LIST } from "../actions/viewListAction";

  
const initialState = 0;

const reducer = (
    action, 
    state = initialState 
    ) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload
        default:
            return state
    }
}

export default reducer;




// export default function(action, state=null){
//     switch(action.type){
//         case GET_ALL_LIST:
//             return action.payload;
//             break;
//     }
//     return state
// }





/*const initState = {
    list: []
};

const viewListReducer = (action, state = initState) => {
    //const { type, payload } = action;
    if (action.type === GET_ALL_LIST) {
        return {
            ...state,
            list: action.payload
        }
    }
};

export default viewListReducer;*/
