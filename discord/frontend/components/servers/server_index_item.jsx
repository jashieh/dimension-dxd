import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/home/${this.props.server.id}`)
    }

    render() {
        return(
            <li className="server-nav-li">
                <button 
                    onClick={this.handleClick}
                    className="server-nav-button">
                    {this.props.server.server_name}
                </button>
            </li>
        );
    }
}

export default withRouter(ServerIndexItem);