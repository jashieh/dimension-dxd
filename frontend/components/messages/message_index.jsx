import React from 'react';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchChannelMessages(this.props.channelId);
    }
    
    render() {
        let messages;

        if (this.props.messages) {
            messages = this.props.messages.map(message => (
                <li>{message.body}</li>
            ))
        }
        return(
            <ul>
                { console.log(messages) }
                { messages }

            </ul>
        );
    }
}

export default MessageIndex;