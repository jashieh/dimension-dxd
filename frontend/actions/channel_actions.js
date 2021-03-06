import * as APIUtil from '../util/channels_api_util';

export const RECEIVE_SERVER_CHANNELS = 'RECEIVE_SERVER_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
// const RECEIVE_SERVER = 'RECEIVE_SERVER';

const receiveServerChannels = (channels) => ({
    type: RECEIVE_SERVER_CHANNELS,
    channels
});

// const receiveServerChannels = (channels) => ({
//     type: RECEIVE_SERVER,
//     channels
// });

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const fetchServerChannels = (serverId) => dispatch => (APIUtil.fetchServerChannels(serverId)
    .then(channels => dispatch(receiveServerChannels(channels))));

export const createChannel = (serverId, channel) => dispatch => (APIUtil.createChannel(serverId, channel)
    .then(channel => dispatch(receiveChannel(channel))));

export const fetchChannel = (serverId, channelId) => dispatch => (APIUtil.fetchChannel(serverId, channelId)
    .then(channel => dispatch(receiveChannel(channel))));
