import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let channelIndexItems = null;
        if (Object.keys(this.props.channels).length !== 0) {
            channelIndexItems = Object.keys(this.props.channels).map(channelId => {
                return (
                    // Refactor with container potentially
                    <ChannelIndexItem key={channelId} 
                        channel={this.props.channels[channelId]}/>
                );
            });
        }


        return(
            // <nav className="channel-nav-container">
                <ul className="channel-nav-ul fade-in">
                    { channelIndexItems }
                </ul>
            // </nav>
        );
    }
}

export default withRouter(ChannelIndex);