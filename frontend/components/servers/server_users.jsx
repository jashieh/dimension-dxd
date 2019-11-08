import React from 'react';

class ServerUsers extends React.Component {
    render() {
        let users;

        if (this.props.users) {
            users = this.props.users.map(user => <div>{user.username}</div>);
        }
        return(
            <div className="server-users-display">
                <div className="server-users-header">
                    Server Users
                </div>   
                <ul className="server-users-ul">
                    { users }
                </ul>
            </div>
        );
    }
}

export default ServerUsers;