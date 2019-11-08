import { connect } from 'react-redux';
import React from 'react';
import { fetchServer, leaveServer } from '../../actions/server_actions';
import { createChannel } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';
import ServerShow from './server_show';
import { openModal } from '../../actions/modal_actions';
import { fetchServerChannels } from '../../actions/channel_actions';


const mapStateToProps = (state, ownProps) => {
    const serverId = parseInt(ownProps.match.params.serverId);
    const server = state.entities.servers[serverId];
    const currentUser = state.entities.users[state.session.id];
    // const channels = state.entities.channels;
    return { serverId, server, currentUser};
};


const mapDispatchToProps = dispatch => ({
    fetchServer: id => dispatch(fetchServer(id)),
    fetchServerChannels: id => dispatch(fetchServerChannels(id)),
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    logout: () => dispatch(logout()),
    otherForm: (
        <button className="add-channel-button" onClick={(e) => { dispatch(openModal('channel'))}}>
        +
        </button>
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);

