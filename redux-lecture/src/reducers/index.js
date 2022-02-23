import { combineReducers } from "redux";
import reducerMeat from "./reducerMeat";
import reducerVegetable from "./reducerVegetable";

const rootRecucer = combineReducers({
    reducerMeat,
    reducerVegetable,
})

export default rootRecucer