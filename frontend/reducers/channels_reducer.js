import {
    RECEIVE_SERVER_CHANNELS,
    RECEIVE_CHANNEL
} from '../actions/channel_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_SERVER_CHANNELS:
            return Object.assign({}, action.channels);
        case RECEIVE_CHANNEL:
            const newChannel = { [action.channel.id]: action.channel };
            return Object.assign({}, state, newChannel);
        case LOGOUT_CURRENT_USER:
            return state;
        default:
            return state;
    }
};

export default channelsReducer;

