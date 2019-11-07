import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.leaveServer = this.leaveServer.bind(this);
    }

    leaveServer() {
        this.props.leaveServer(this.props.serverId);
        this.props.history.push('/home');
    }

    render() {
        return(
            <div className="server-dropdown-container collapse-item">
                <div className="server-dropdown-item">
                    <div className="server-dropdown-label">
                        Invite People 
                    </div>
                    <div className="server-dropdown-icon">
                        Icon
                    </div>
                </div>
                <div className="server-dropdown-item">
                    <div className="server-dropdown-label">
                        Server Settings 
                    </div>
                    <div className="server-dropdown-icon">
                        Icon
                    </div>
                </div>
                <div className="server-dropdown-item" onClick={this.leaveServer}>
                    <div className="server-dropdown-label" >
                        Leave Server
                    </div>
                    <div className="server-dropdown-icon">
                        Icon
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ServerDropdown);