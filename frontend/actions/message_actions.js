import * as APIUtil from '../util/message_api_util';

export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';

const receiveChannelMessages = (messages) => ({
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
});

export const fetchChannelMessages = (channelId) => dispatch => (APIUtil.fetchChannelMessages(channelId)
    .then(messages => dispatch(receiveChannelMessages(messages))));