import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { 
    fetchAllServers, 
    createServer,
    joinServer 
} from '../../actions/server_actions';
// import { openModal } from '../../actions/modal_actions';
// import React from 'react';


const mapStateToProps = (state) => ({
    servers: state.entities.servers 
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllServers: servers => dispatch(fetchAllServers(servers)),
    createServer: server => dispatch(createServer(server)),
    joinServer: inviteURL => dispatch(joinServer(inviteURL)),
    // otherForm: (
    //     <button className="add-channel-button" onClick={(e) => { dispatch(openModal('server'))}}>
    //     +
    //     </button>
    // ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);