import { connect } from 'react-redux';
import ServerDropdown from './server_dropdown';
import { leaveServer, updateServer, deleteServer } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';


const mapDispatchToProps = dispatch => ({
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    updateServer: server => dispatch(updateServer(server)),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    settings: () => dispatch(openModal('serverSettings')),
    leave: () => dispatch(openModal('leave')),
    invite: () => dispatch(openModal('invite')),
});

export default connect(null, mapDispatchToProps)(ServerDropdown);