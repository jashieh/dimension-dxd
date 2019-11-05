import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchAllServers, 
createServer,
joinServer } from '../../actions/server_actions';

const mapStateToProps = (state) => ({
    servers: state.entities.servers 
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllServers: servers => dispatch(fetchAllServers(servers)),
    createServer: server => dispatch(createServer(server)),
    joinServer: inviteURL => dispatch(joinServer(inviteURL))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);