import React from 'react';

class InviteModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="invite-modal-container">
                <div className="invite-modal-header">
                    INVITE FRIENDS TO '{this.props.server.server_name.toUpperCase()}'
                </div>
                <div className="invite-modal-footer">
                    <div className="invite-body">
                        Share this link with others to grant access to your server!
                    </div>
                    <div className="invite-modal-link-container">
                        <div className="invite-link">
                            {this.props.server.invite_url}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InviteModal;