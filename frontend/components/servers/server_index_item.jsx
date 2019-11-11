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
        this.setState({ display: "none" });
    }
    
    handleClick() {
        this.props.fetchServer(this.props.server.id)
            .then(
                () => {
                    this.props.fetchServerChannels(this.props.server.id)
                        .then(
                            () => {
                                let channelId = Object.keys(this.props.channels)[0];
                                this.props.history.push(`/home/${this.props.server.id}/channels/${channelId}`);
                            }
                        )
                }
            );
    }
    
    render() {
        return(
            <li className="server-nav-li" 
                onMouseEnter={this.MouseHover} 
                onMouseLeave={this.MouseHover}
                onClick={this.handleClick}>
                <div className="server-nav-button">
                    {this.props.server.server_name[0].toUpperCase()}
                </div>
                { this.state.isHovering && <Description description={this.props.server.server_name} type={"server-hover"}/> }
            </li>
            );
        }
    }
    
    export default withRouter(ServerIndexItem);