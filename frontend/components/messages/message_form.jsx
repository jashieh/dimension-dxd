import React from 'react';
import { getResponse } from '../../util/chatbot_api_util';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };
        this.toggleChatbot = true;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        let message = "Chatbot is active. Type /chatbot to toggle bot";
        // App.cable.subscriptions.subscriptions[0].speak({ body: message, author_id: 1, channel_id: this.props.channel.id});
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, author_id: this.props.currentUser.id, channel_id: this.props.channel.id});
        if (this.toggleChatbot && this.state.body !== "/chatbot") {
            this.chatBot(this.state.body);
        }

        if(this.state.body === "/chatbot") {
            this.toggleChatbot = !this.toggleChatbot;
            let msg = "";
            if (this.toggleChatbot) {
                msg = "Chatbot Activated";
            } else {
                msg = "Chatbot Deactivated";
            }
            
            setTimeout(() => {
                App.cable.subscriptions.subscriptions[0].speak({ body: msg, author_id: this.props.chatBot.id, channel_id: this.props.channel.id});
            }, 250);
        }

        this.setState({ body: "" });
    }

    chatBot(msg) {
        getResponse(msg, this.props.chatBot.id).then(
            (res) => {
                App.cable.subscriptions.subscriptions[0].speak({ body: res.cnt, author_id: this.props.chatBot.id, channel_id: this.props.channel.id});
            }
        )
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