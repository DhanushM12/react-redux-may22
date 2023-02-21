import { ADD_TASK } from "../actions";
import { combineReducers } from "redux";

const taskReducers = (state = [], action) => {
    switch(action.type){
        case ADD_TASK:
            state = state.concat(action.payload)
            break
        default:
            return state;
    }
    return state;
}

const userReducers = () => {

}

const reducers = combineReducers({
    tasks: taskReducers,
    users: userReducers
})

export default reducers