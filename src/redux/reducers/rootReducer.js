import { combineReducers } from "redux";            // must import combineReducers

import  viewListReducer  from './viewListReducer';

const rootReducer = combineReducers({
    visitorList : viewListReducer,
})

export default rootReducer;