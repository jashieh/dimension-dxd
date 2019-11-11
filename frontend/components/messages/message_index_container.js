import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchChannelMessages } from '../../actions/message_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    messages: Object.keys(state.entities.messages).map(messageId => (
        state.entities.messages[messageId]
    )),
    users: state.entities.users 
});

const mapDispatchToProps = (dispatch) => ({
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    fetchUsers: (serverId) => dispatch(fetchUsers(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);