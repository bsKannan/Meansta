import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"

var chat = combineReducers({
    messages,
    users
});

export default chat