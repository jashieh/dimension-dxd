import React from 'react';

class MessageIndexItem extends React.Component {
    render() {
        let username;
        let createdAt;

        if(this.props.author) {
            username = this.props.author.username;
        }

        if(this.props.message.created_at) {
            let time = new Date(this.props.message.created_at);
            createdAt = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
        } else {
            let time = new Date();
            createdAt = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
        }

        return(
            <li className="message-li-container">
                <div className="message-user-icon-container">
                    <img src="/discord_user.png" alt="" className="message-user-icon"/>
                </div>
                <div className="message-right-container">
                    <div className="message-info-header">
                        <div className="message-author">
                            { username }
                        </div>
                        <div className="message-date">
                            { createdAt }
                        </div>
                    </div>
                    <div className="message-body">
                        { this.props.message.body }
                    </div>
                </div>

            </li>
        );
    }
}

export default MessageIndexItem;