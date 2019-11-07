import React from 'react';
import { withRouter } from 'react-router-dom';
import Description from '../hover/description';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // let serverButtons = document.getElementsByClassName('server-nav-button');
        // for(let i = 0; i < serverButtons.length; i++) {
        //     serverButton[i].addEventListener('mouseover', function(e) {
        //         this.nextElementSibling.classList.toggle('collapse-item');
        //     });
        //     serverButton[i].addEventListener('mouseout', function(e) {
        //         this.nextElementSibling.classList.toggle('collapse-item');
        //     });
        // }
    }

    handleClick() {
        (this.props.fetchServer(this.props.server.id));
        this.props.history.push(`/home/${this.props.server.id}`);
    }

    render() {
        return(
            <li className="server-nav-li">
                <button 
                    onClick={this.handleClick}
                    className="server-nav-button">
                    {this.props.server.server_name[0]}
                </button>
                <Description description={this.props.server.server_name} />
            </li>
        );
    }
}

export default withRouter(ServerIndexItem);