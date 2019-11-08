import React from 'react';

class ChannelShow extends React.Component {

    render() {
        let test = null;
        if(this.props.channel) {
            test = this.props.channel.id
        }
        return(
            <div className="channel-show-container">
                <div className="channel-message-container">
                    { test }
                </div>
            </div>
        );
    }
}

export default ChannelShow;