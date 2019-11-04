import React from 'react';

export default class ServerIndexItem extends React.Component {

    render() {
        return(
            <li className="server-nav-li">
                <button className="server-nav-button">
                    {this.props.server.server_name}
                </button>
            </li>
        );
    }
}