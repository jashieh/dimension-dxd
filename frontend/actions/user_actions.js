import * as APIUtil from '../util/users_api_util';

export const RECEIVE_SERVER_USERS = "RECEIVE_SERVER_USERS";

const receiveServerUsers = (users) => ({
    type: RECEIVE_SERVER_USERS,
    users
});

//flag 
export const fetchUsers = (serverId) => dispatch => (APIUtil.fetchUsers(serverId)
    .then(users => dispatch(receiveServerUsers(users))));