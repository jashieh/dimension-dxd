import { RECEIVE_CHANNEL_MESSAGES } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            return Object.assign({}, action.messages);
        default:
            return state;
    }
};

export default messagesReducer;