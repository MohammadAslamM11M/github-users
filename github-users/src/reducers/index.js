import { combineReducers } from "redux";
import userReducer from "./userReducer";
import repositoryReducer from "./repositoryReducer";
import followerReducer from "./followerReducer";

const rootReducer = combineReducers({
    user: userReducer,
    repositories: repositoryReducer,
    followers: followerReducer,
});

export default rootReducer;
