import React from 'react';

class ServerUsers extends React.Component {
    render() {
        let users;

        if (this.props.users) {
            users = this.props.users.map(user => user.username);
        }
        console.log(this.props)
        return(
            <div>
                { users }
            </div>
        );
    }
}

export default ServerUsers;