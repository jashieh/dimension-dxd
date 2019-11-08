import React from 'react';

class InviteModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="invite-modal-container">
                <div>
                    Use this URL to invite friends 
                </div>
                {this.props.inviteUrl}
            </div>
        );
    }
}

export default InviteModal;