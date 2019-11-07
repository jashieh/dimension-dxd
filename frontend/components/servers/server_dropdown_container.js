import { connect } from 'react-redux';
import ServerDropdown from './server_dropdown';
import { leaveServer } from '../../actions/server_actions';


const mapDispatchToProps = dispatch => ({
    leaveServer: serverId => dispatch(leaveServer(serverId)),
});

export default connect(null, mapDispatchToProps)(ServerDropdown);