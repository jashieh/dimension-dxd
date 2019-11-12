import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../modal/modal';

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
            <div className="server-dropdown-container collapse-item fade-in">
                <div className="server-dropdown-item" onClick={this.props.invite}>
                    <div className="server-dropdown-label">
                        Invite People 
                    </div>
                    <div className="server-dropdown-icon">
                        <i className="fas fa-user-plus"></i>
                    </div>
                </div>
                <div className="server-dropdown-item" onClick={this.props.settings}>
                    <div className="server-dropdown-label">
                        Server Settings 
                    </div>
                    <div className="server-dropdown-icon">
                        <i className="fas fa-cog"></i>
                    </div>
                </div>
                <div className="server-dropdown-item leave-server" onClick={this.props.leave}>
                    <div className="server-dropdown-label">
                        Leave Server
                    </div>
                    <div className="server-dropdown-icon">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ServerDropdown);