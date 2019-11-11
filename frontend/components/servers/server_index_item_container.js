import { connect } from 'react-redux';
import ServerIndexItem from './server_index_item';
import { fetchServer } from '../../actions/server_actions';
import { fetchServerChannels } from '../../actions/channel_actions';


const mapStateToProps = (state) => ({
    channels: state.entities.channels
});

const mapDispatchToProps = (dispatch) => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndexItem);