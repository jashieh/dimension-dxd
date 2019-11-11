import React from 'react';


class TopBar extends React.Component {
    render() {
        let channelName;
        if (this.props.channel) {
            channelName = this.props.channel.channel_name;
        }
        return(
            <div className="top-bar">
                <div className="top-bar-channel-info-container">
                    <div className="top-bar-channel-icon">
                        <i className="fas fa-hashtag"></i>
                    </div>
                    <div>
                        { channelName }
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;