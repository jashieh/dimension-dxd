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

    handleClick(e) {
        if (this.props.type === "addServer") {
            this.props.action();
        } else if (this.props.type === "home") {
            let serverButtons = document.getElementsByClassName('server-nav-button');

            for(let i = 0; i < serverButtons.length; i++) {
                serverButtons[i].classList.remove('server-nav-button-selected');
            }
            serverButtons[1].classList.add('server-nav-button-selected');
        }
    }

    render() {
        let display = null;
        let description;

        if(this.props.type === "addServer") {
            display = 
                <div className="server-nav-button" onMouseEnter={this.MouseHover} 
                onMouseLeave={this.MouseHover}>
                    {this.props.name}
                </div>
            description = this.state.isHovering && <Description description={this.props.description} type={"server-hover"}/>;
        } else {
            display = 
                <Link to={this.props.path} className="server-nav-button" onMouseEnter={this.MouseHover} 
                onMouseLeave={this.MouseHover}>{this.props.name}</Link>;
            description = this.state.isHovering && <Description description={this.props.description} type={"server-hover"}/>; 
        }

        return(
            <li className={`server-nav-li ${this.props.class}`}
                onClick={this.handleClick}>
                { display }
                { description }
            </li>
        );

    }
}

export default LeftNavItem;