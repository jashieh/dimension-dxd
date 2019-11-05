import React from 'react';

export default class ServerShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId);
    }

    render() {
        let serverName = "";
        let inviteUrl = "";
        if (this.props.server) {
            serverName = this.props.server.server_name;
            inviteUrl = this.props.server.invite_url;
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

                </div>
                <div className="footer-util-container">
                    { }
                </div>
            </div>
        );
    }
}