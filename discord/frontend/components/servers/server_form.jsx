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
        console.log(this.state);
        e.preventDefault();
        this.props.createServer(this.state);
    }

    render() {
        return(
            <div className="server-form-container">
                <div className="">
                    <form onSubmit={this.handleSubmit}>
                        <label>SERVER NAME</label>
                        <input onChange={this.update} type="text"/>
                        <input type="submit" value="Create"/>
                    </form>
                </div>
            </div>
        );
    }
}