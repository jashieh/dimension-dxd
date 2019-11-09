import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';

export default combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer,
    messages: messagesReducer
});