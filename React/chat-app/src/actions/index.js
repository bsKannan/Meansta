import * as types from '../constants/ActionTypes';

let nextMessageId = 0
var nextUserId = 0 

export var addMessage = (message, author) => ({
    type: types.ADDMESSAGE,
    id: nextMessageId++,
    message,
    author
})

export var addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

export var messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
})

export var populateUsersList = user => ({
    type: types.USERS_LIST,
    users
})