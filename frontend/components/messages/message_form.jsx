import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, author_id: this.props.currentUser.id, channel_id: this.props.channelId});
        this.setState({ body: "" });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Type message here"
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default MessageForm;