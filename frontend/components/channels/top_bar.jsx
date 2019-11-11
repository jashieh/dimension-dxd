import React from 'react';


class TopBar extends React.Component {
    render() {
        let channelName;
        if (this.props.channel) {
            channelName = this.props.channel.channel_name;
        }
        return(
            <div className="top-bar">
                { channelName }
            </div>
        );
    }
}

export default TopBar;