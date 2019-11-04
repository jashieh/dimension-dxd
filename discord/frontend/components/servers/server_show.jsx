import React from 'react';

export default class ServerShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        this.props.fetchServer(this.props.match.params.serverId);
    }

    render() {
        let serverName = "";
        if (this.props.server) {
            serverName = this.props.server.server_name;
        }

        return(
            <div className="single-server-show">
                <div className="single-server-header">
                    <label>{serverName}</label>
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