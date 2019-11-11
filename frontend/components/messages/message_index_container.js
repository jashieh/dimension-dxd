import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchChannelMessages } from '../../actions/message_actions';

const mapStateToProps = (state) => ({
    messages: Object.keys(state.entities.messages).map(messageId => (
        state.entities.messages[messageId]
    )),
    users: state.entities.users 
});

const mapDispatchToProps = (dispatch) => ({
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);