import { connect } from 'react-redux';
import MessageForm from './message_form';

const mapStateToProps = (state) => {
    let chatBot;
    Object.keys(state.entities.users).forEach(userId => {
        if(state.entities.users[userId].username === 'ChatBot') {
            chatBot = state.entities.users[userId];
        }
    });
    return ({
    currentUser: state.entities.users[state.session.id],
    chatBot
})};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);