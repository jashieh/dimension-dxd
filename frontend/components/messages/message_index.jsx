import React from 'react';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchChannelMessages()
    }
    
    render() {
        return(
            <ul>

            </ul>
        );
    }
}

export default MessageIndex;