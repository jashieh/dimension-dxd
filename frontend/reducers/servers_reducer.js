import { 
    RECEIVE_ALL_SERVERS, 
    RECEIVE_SERVER,
    LEAVE_SERVER,
    REMOVE_SERVER
} from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            return Object.assign({}, state, action.servers);
        case RECEIVE_SERVER: 
            const newServer = { [action.server.id]: action.server };
            return Object.assign({}, state, newServer);
        case REMOVE_SERVER:
            const newState = Object.assign({}, state);
            delete newState[action.serverId];
            return newState;
        case LEAVE_SERVER:
            const nextState = Object.assign({}, state);
            nextState[action.serverId] = null;
            delete nextState[action.serverId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return Object.assign({});
        default:
            return state;
    }
};

export default serversReducer;