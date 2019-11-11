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
        App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, author_id: this.props.currentUser.id, channel_id: this.props.channel.id});
        this.setState({ body: "" });
    }

    render() {
        return(
            <div className="message-form-container">
                <form onSubmit={this.handleSubmit} className="message-form">
                    <div className="message-form-plus-container">
                        <svg width="30" height="30" viewBox="0 0 24 24" className="message-form-plus-button">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                        </svg>
                    </div>
                    <input type="text" 
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder={`Message #${this.props.channel.channel_name}`}
                        className="message-form-field"
                    />
                    {/* <input type="submit" /> */}
                </form>
            </div>
        );
    }
}

export default MessageForm;