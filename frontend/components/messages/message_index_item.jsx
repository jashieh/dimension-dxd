import React from 'react';

class MessageIndexItem extends React.Component {
    render() {
        let username;
        if(this.props.author) {
            username = this.props.author.username;
        }
        return(
            <li className="message-li-container">
                <div className="message-user-icon-container">
                    <img src="/discord_user.png" alt="" className="message-user-icon"/>
                </div>
                <div className="message-right-container">
                    <div className="message-info-header">
                        <div className="message-author">
                            {console.log(this.props)}
                            { username }
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