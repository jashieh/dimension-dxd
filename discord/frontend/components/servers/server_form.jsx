import React from 'react';

export default class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { server_name: "" };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        this.setState({ server_name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state);
    }

    render() {
        return(
            <div className="server-form-container">
                    <form className="server-form">
                        <label className="server-form-header">SERVER NAME</label>
                        <input onChange={this.update} type="text" 
                            className="server-form-input"/>
                        <div>
                            <button onClick={this.props.toggleForm}>Back</button>
                            <input onClick={this.handleSubmit} type="submit" value="Create"/>
                        </div>
                    </form>
            </div>
        );
    }
}