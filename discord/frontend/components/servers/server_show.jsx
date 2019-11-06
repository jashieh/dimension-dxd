import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container';


export default class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.leaveServer = this.leaveServer.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId);
    }

    leaveServer() {
        // this.props.leaveServer(this.props.match.params.serverId);
        this.props.leaveServer(this.props.server.id);
    }

    render() {
        let serverName = "";
        let inviteUrl = "";
        if (this.props.server) {
            serverName = this.props.server.server_name;
            inviteUrl = this.props.server.invite_url;
        } else {
            serverName = "Server does not exist";
        }

        return(
            <div className="single-server-show">
                <div className="single-server-header">
                    <label>{serverName}</label>
                    <br/>
                    <label>
                        {inviteUrl}
                    </label>
                </div>
                <div className="channel-list">
                    <ul className="text-channels">
                        <label>TEXT CHANNELS</label>
                    </ul>
                    <ul className="voice-channels">
                        <label>VOICE CHANNELS</label>
                    </ul>

                    <ChannelIndexContainer />
                </div>
                { this.props.otherForm }
                <button onClick={this.leaveServer}>Leave Server</button>
                
                <div className="footer-util-container">
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </div>
        );
    }
}