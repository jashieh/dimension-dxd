import { connect } from 'react-redux';
import ServerIndexItem from './server_index_item';
import { fetchServer } from '../../actions/server_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(null, mapDispatchToProps)(ServerIndexItem);