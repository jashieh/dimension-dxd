import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.showChannel = this.showChannel.bind(this);
    }

    showChannel() {
        this.props.history.push(`/home/${this.props.channel.server_id}/channels/${this.props.channel.id}`)
    }

    render() {
        return(
            <li className="channel-nav-li" onClick={this.showChannel}>
                <div className="channel-nav-hash">
                    <i className="fas fa-hashtag"></i>
                </div>
                <div className="channel-nav-name">
                    { this.props.channel.channel_name }
                </div>
            </li>
        );
    }
}

export default withRouter(ChannelIndexItem);