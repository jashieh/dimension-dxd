import React from 'react';
import { withRouter } from 'react-router-dom';
import Description from '../hover/description';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovering: false,
            display: "none",
        };

        this.MouseHover = this.MouseHover.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    
    MouseHover() {
        this.setState(this.toggleHoverState);
        this.setState({ display: "none"});
    }
    
    handleClick() {
        (this.props.fetchServer(this.props.server.id));
        this.props.history.push(`/home/${this.props.server.id}`);
    }
    
    render() {
        return(
            <li className="server-nav-li">
                <div onClick={this.handleClick} className="server-nav-button"
                    onMouseEnter={this.MouseHover} onMouseLeave={this.MouseHover}>
                    {this.props.server.server_name[0].toUpperCase()}
                    { this.state.isHovering && <Description description={this.props.server.server_name} type={"server-hover"}/> }
                </div>
            </li>
            );
        }
    }
    
    export default withRouter(ServerIndexItem);