import React from 'react';

class JoinServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { invite_url: "" };
        this.error = null;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hitEnter = this.hitEnter.bind(this);
        this.enterEvent = this.enterEvent.bind(this);
    }

    componentDidMount() {
        this.eventListen();
    }

    update(e) {
        this.setState( { invite_url: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinServer(this.state.invite_url).then(
            (payload) => {this.props.toggleModal();
                this.props.history.push(`/home/${payload.server.id}`)
            },
            () => {this.error = "(The invite is invalid or has expired)";
                    this.forceUpdate();
            },
        );
    }

    hitEnter() {
        this.props.joinServer(this.state.invite_url).then(
            (payload) => {this.props.toggleModal();
                this.props.history.push(`/home/${payload.server.id}`);
                $(document).off("keydown", this.enterEvent);
            },
            () => {this.error = "(The invite is invalid or has expired)"; 
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
            <div className="join-form-container">
                <form className="join-form">
                    <div className="join-form-header">
                        JOIN A SERVER
                    </div>
                    <div className="join-form-body">
                        <div className="join-form-instructions">
                            Enter an invite below to join an existing server.
                            The invite will look something like these:
                        </div>
                        <div className="join-url-example">
                            discord.com/qMyKiJBFnsm-3g
                        </div>
                    </div>
                    <div className="join-form-main">
                        <div className="join-url-container">
                            <input type="text" className="join-form-input"
                                onChange={this.update}/>
                            <div className="join-error-container">
                                <label className="join-form-input-label">Enter an invite url</label>
                                <div className="join-form-errors">
                                    { this.error }
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="join-form-footer">
                        <div className="back-button-container" onClick={this.props.toggleForm}>
                            <div className="back-arrow">←</div>
                            <button
                            className="server-form-back">Back</button>
                        </div>
                        <input onClick={this.handleSubmit} type="submit" value="Join"
                            className="join-server-button"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default JoinServerForm;