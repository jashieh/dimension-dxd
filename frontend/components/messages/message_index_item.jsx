import React from 'react';
import Description from '../hover/description';

class MessageIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovering: false,
            display: "none",
        };

        this.MouseHover = this.MouseHover.bind(this);
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


    render() {
        let username;
        let createdAt;
        let timeDetails = "";
        
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        if(this.props.author) {
            username = this.props.author.username;
        }

        if(this.props.message.created_at) {
            let time = new Date(this.props.message.created_at);
            createdAt = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;

            timeDetails = weekday[time.getDay()] + ", " + monthNames[time.getMonth()] + " " + time.getDate() + ", " 
                + time.getFullYear() + " " + hours + ":" + minutes + " " + ampm;
        } else {
            let time = new Date();
            createdAt = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;

            timeDetails = weekday[time.getDay()] + ", " + monthNames[time.getMonth()] + " " + time.getDate() + ", " 
                + time.getFullYear() + " " + hours + ":" + minutes + " " + ampm;
        }

        return(
            <li className="message-li-container">
                <div className="message-user-icon-container">
                    <img src="/discord_user.png" alt="" className="message-user-icon"/>
                </div>
                <div className="message-right-container">
                    <div className="message-info-header">
                        <div className="message-author">
                            { username }
                        </div>
                        <div className="message-date"
                            onMouseEnter={this.MouseHover} 
                            onMouseLeave={this.MouseHover}>
                                <div className="test">
                                    { createdAt }
                                </div>
                            { this.state.isHovering && <Description description={timeDetails} type={"message-hover"}/> }
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