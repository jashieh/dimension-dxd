import * as APIUtil from '../util/servers_api_util';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

const receiveAllServers = (servers) => ({
    type: RECEIVE_ALL_SERVERS,
    servers
});

const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
});

export const fetchAllServers = () => dispatch => (APIUtil.fetchAllServers()
    .then(servers => (dispatch(receiveAllServers(servers)))));

export const createServer = (server) => dispatch => (APIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server))));

export const fetchServer = (serverId) => dispatch => (APIUtil.fetchServer(serverId)
    .then(server => (dispatch(receiveServer(server)))));

export const joinServer = (inviteURL) => dispatch => (APIUtil.joinServer(inviteURL)
    .then(server => dispatch(receiveServer(server))));