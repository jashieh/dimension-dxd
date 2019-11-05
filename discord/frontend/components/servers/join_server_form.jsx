import React from 'react';

class JoinServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { invite_url: "" };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        this.setState( { invite_url: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinServer(this.state).then(
            (payload) => {this.props.toggleModal();
                this.props.history.push(`/home/${payload.server.id}`)
            },
            () => {
                    this.forceUpdate();
            }
        );
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
                            <label className="join-form-input-label">Enter an invite url</label>
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