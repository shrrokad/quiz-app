import { combineReducers } from "redux";
import { stateReducer } from "./reducer";
import {answerReducer} from "./reducer"

// Combine All Reducer In One 

const rootred = combineReducers({
    stateReducer,
    answerReducer
})

export default rootred