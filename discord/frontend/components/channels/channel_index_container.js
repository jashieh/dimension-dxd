import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import {
    fetchServerChannels,
    fetchChannel,
    createChannel
} from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    // test: ownProps,
    // server: state.entities[ownProps.match.params.serverId],
    channels: state.entities.channels
});

const mapDispatchToProps = (dispatch) => ({
    fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId)),
    fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId)),
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);


