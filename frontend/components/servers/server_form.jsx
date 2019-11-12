import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { server_name: "" };
        this.error = null;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hitEnter = this.hitEnter.bind(this);
        this.enterEvent = this.enterEvent.bind(this);
    }

    componentDidMount() {
        this.eventListen();
        this.inputField = document.querySelector('.server-form-input');
    }

    update(e) {
        this.setState({ server_name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state).then(
            (payload) => {this.props.toggleModal();
                let channel = { channel_name: "general" };
                let serverButtons = document.getElementsByClassName('server-nav-button');

                for(let i = 0; i < serverButtons.length; i++) {
                    serverButtons[i].classList.remove('server-nav-button-selected');
                }
                
                serverButtons[serverButtons.length-2].classList.add('server-nav-button-selected');

                this.props.createChannel(payload.server.id, channel).then(
                    (payload2) => {
                        this.props.history.push(`/home/${payload.server.id}/channels/${payload2.channel.id}`)
                    }
                )
            },
            () => {
                if(this.inputField.value.length <= 0) {
                    this.error = "- This field is required"; 
                } else {
                    this.error = "- max length 12 characters"; 
                }
                document.querySelector('.server-form-label')
                    .classList.add('server-form-submit-fail');
                    this.forceUpdate();
            }
        );
    }

    hitEnter() {
        this.props.createServer(this.state).then(
            (payload) => {this.props.toggleModal();
                let serverButtons = document.getElementsByClassName('server-nav-button');

                for(let i = 0; i < serverButtons.length; i++) {
                    serverButtons[i].classList.remove('server-nav-button-selected');
                }
                
                serverButtons[serverButtons.length-2].classList.add('server-nav-button-selected');
                let channel = { channel_name: "general"};
                this.props.createChannel(payload.server.id, channel).then(
                    (payload2) => {
                        this.props.history.push(`/home/${payload.server.id}/channels/${payload2.channel.id}`)
                    }
                )
                $(document).off("keydown", this.enterEvent);
            },
            () => {
                if(this.inputField.value.length <= 0) {
                    this.error = "- This field is required"; 
                } else {
                    this.error = "- max length 12 characters"; 
                } 
                document.querySelector('.server-form-label')
                    .classList.add('server-form-submit-fail');
                this.forceUpdate();
            }
        );
    }

    enterEvent(e) {
        if(e.key === 'Enter') {
            this.hitEnter();
        }
    }
    
    eventListen() {
        let that = this;
        $(document).on("keydown", that.enterEvent)
    }

    render() {
        return(
            <div className="server-form-container">
                <form className="server-form">
                    <div className="server-form-header">
                        CREATE YOUR SERVER
                    </div>
                    <div className="server-form-body">
                        By creating a server, you will have access to free voice and 
                        text chat to user amongst your friends.
                    </div>
                    <div className="server-form-main">
                        <div className="server-form-left">
                            <div className="server-name-container">
                                <div className="server-name-error-container">
                                    <div className="server-form-label">SERVER NAME</div>
                                    <div className="server-form-errors">
                                        { this.error }
                                    </div>
                                </div>
                                <div className="server-form-input-wrapper">
                                    <input onChange={this.update} type="text" 
                                        className="server-form-input"
                                        placeholder="Enter a server name"
                                        autoFocus/>
                                </div>
                            </div>
                            <div className="server-region-container">
                                <div className="server-form-label">SERVER REGION</div>
                                <div className="server-region-input-container">
                                    <div className="server-form-flag-container">
                                        <img src="/flag.png" alt="flag"/>
                                    </div>
                                    <div className="server-region-text">
                                        US West
                                    </div>
                                    <button className="server-region-button">
                                        Can't Change
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="server-form-right">
                            <div className="server-form-circle">
                                Feature in progress
                            </div>
                        </div>
                    </div>
                    <div className="server-form-footer">
                        <div className="back-button-container" onClick={this.props.toggleForm}>
                            <div className="back-arrow">←</div>
                            <button onClick={this.props.toggleForm}
                            className="server-form-back">BACK</button>
                        </div>
                        <input onClick={this.handleSubmit} type="submit" value="Create"
                            className="submit-server-button"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(ServerForm);