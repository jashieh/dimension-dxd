import React from 'react';

class MessageIndexItem extends React.Component {
    render() {
        return(
            <li className="message-li-container">
                <div className="message-user-icon-container">
                    <img src="/discord_user.png" alt=""/>
                </div>
                <div className="message-right-container">
                    <div className="message-info-header">
                        <div className="message-author">
                            { this.props.author.username }
                        </div>
                        <div className="message-date">
                            { this.props.message.created_at }
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