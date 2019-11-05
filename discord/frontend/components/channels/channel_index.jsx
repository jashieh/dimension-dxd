import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchServerChannels(this.props.match.params.serverId)
    }

    render() {
        let channelIndexItems = null;
        if (Object.keys(this.props.channels).length !== 0) {
            channelIndexItems = Object.keys(this.props.channels).map(channelId => {
                return (
                    <ChannelIndexItem key={channelId} />
                );
            });
        }


        return(
            <nav className="channel-nav-container">
                <ul className="channel-nav-ul">
                    { channelIndexItems }
                </ul>
            </nav>
        );
    }
}

export default withRouter(ChannelIndex);