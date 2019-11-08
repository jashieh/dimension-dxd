import React from 'react';
import { withRouter } from 'react-router-dom';

class InviteModal extends React.Component {
    constructor(props) {
        super(props);
        this.leaveServer = this.leaveServer.bind(this);
    }

    leaveServer() {
        this.props.leaveServer(this.props.server.id);
        this.props.closeModal();
        this.props.history.push('/home');
    }

    render() {
        return(
            <div className="leave-modal-container">
                { console.log(this.props)}
                <div className="leave-modal-text-container">
                    <div className="leave-modal-header">
                        LEAVE '{this.props.server.server_name.toUpperCase()}'
                    </div>
                    <div className="leave-modal-body">
                        Are you sure you want to leave 
                        <span className="leave-server-name">
                        {" " + this.props.server.server_name}</span>?
                        You won't be able <br/>to rejoin this server unless you are 
                        re-invited.
                    </div>
                </div>
                <div className="leave-modal-footer">
                    <div className="leave-modal-left-button" onClick={this.props.closeModal}>
                        Cancel
                    </div>
                    <button className="leave-modal-right-button" onClick={this.leaveServer}>
                        Leave Server
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(InviteModal);