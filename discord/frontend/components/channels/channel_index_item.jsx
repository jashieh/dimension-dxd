import React from 'react';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <li className="channel-nav-li">
                { this.props.channel.channel_name }
            </li>
        );
    }
}

export default ChannelIndexItem;