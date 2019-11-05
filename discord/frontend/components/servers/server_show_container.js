import { connect } from 'react-redux';
import { fetchServer, leaveServer } from '../../actions/server_actions';
import { logout } from '../../actions/session_actions';
import ServerShow from './server_show';

const mapStateToProps = (state, ownProps) => {
    const serverId = parseInt(ownProps.match.params.serverId);
    const server = state.entities.servers[serverId];
    return { serverId, server };
};


const mapDispatchToProps = dispatch => ({
    fetchServer: id => dispatch(fetchServer(id)),
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow);

