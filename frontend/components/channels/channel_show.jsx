import React from 'react';
import MessageForm from '../messages/message_form';
import MessageFormContainer from '../messages/message_form_container';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data.body)
                    });
                },
                speak: function(data) {
                    return this.perform("speak", data);
                }
            }
        )
    }

    componentDidUpdate() {
        // this.bottom.current.scrollIntoView();
    }
    
    
    render() {
        let test = null;
        let messageForm = null;
        const messageList = this.state.messages.map(message => {
            return (
                <li>
                    { message }
                    <div ref={this.bottom} />
                </li>
            );
        });

        if(this.props.channel) {
            test = this.props.channel.id;
            messageForm = <MessageFormContainer channelId={this.props.channel.id} />;
        }
        return(
            <div className="channel-show-container">
                <div className="channel-message-container">
                    {/* { test } */}
                    <div>{messageList}</div>
                    { messageForm }
                    {/* <MessageForm channelId={this.props.channel.id} currentUserId={}/> */}
                </div>
            </div>
        );
    }
}

export default ChannelShow;