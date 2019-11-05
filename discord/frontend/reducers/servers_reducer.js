import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            return Object.assign({}, state, action.servers);
        case RECEIVE_SERVER: 
            const newServer = { [action.server.id]: action.server};
            return Object.assign({}, state, newServer);
        case LOGOUT_CURRENT_USER:
            return Object.assign({});
        default:
            return state;
    }
};

export default serversReducer;