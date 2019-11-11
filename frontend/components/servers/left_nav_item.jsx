import React from 'react';
import Description from '../hover/description';
import { Link } from 'react-router-dom';


class LeftNavItem extends React.Component {
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
        if (this.props.type === "addServer") {
            this.props.action();
        }
    }

    render() {
        let display = null;
        let description;

        if(this.props.type === "addServer") {
            display = 
                <div className="server-nav-button">
                    {this.props.name}
                </div>
            description = this.state.isHovering && <Description description={this.props.description} type={"server-hover"}/>;
        } else {
            display = 
                <Link to={this.props.path} className="server-nav-button">{this.props.name}</Link>;
            description = this.state.isHovering && <Description description={this.props.description} type={"server-hover"}/>; 
        }

        return(
            <li className="server-nav-li" 
                onMouseEnter={this.MouseHover} 
                onMouseLeave={this.MouseHover}
                onClick={this.handleClick}>
                { display }
                { description }
            </li>
        );

    }
}

export default LeftNavItem;