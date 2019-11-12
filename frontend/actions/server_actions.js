import * as APIUtil from '../util/servers_api_util';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

const receiveAllServers = (servers) => ({
    type: RECEIVE_ALL_SERVERS,
    servers
});

const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
});

const removeServer = (serverId) => ({
    type: REMOVE_SERVER,
    serverId
});

const removeServerMembership = (server) => ({
    type: LEAVE_SERVER,
    serverId: server.id
});

export const fetchAllServers = () => dispatch => (APIUtil.fetchAllServers()
    .then(servers => (dispatch(receiveAllServers(servers)))));

export const createServer = (server) => dispatch => (APIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server))));

export const fetchServer = (serverId) => dispatch => (APIUtil.fetchServer(serverId)
    .then(server => (dispatch(receiveServer(server)))));

export const updateServer = (server) => dispatch => (APIUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server))));

export const deleteServer = (serverId) => dispatch => (APIUtil.deleteServer(serverId)
    .then(() => dispatch(removeServer(serverId))));

export const joinServer = (inviteURL) => dispatch => (APIUtil.joinServer(inviteURL)
    .then(server => dispatch(receiveServer(server)), error => $.Deferred().reject(error)));

export const leaveServer = (serverId) => dispatch => (APIUtil.leaveServer(serverId)
    .then(server => dispatch(removeServerMembership(server))));

