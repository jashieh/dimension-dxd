import React from 'react';
import MessageIndexItem from './message_index_item';
import { withRouter } from 'react-router-dom'


class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchChannelMessages(this.props.channel.id);
        this.props.fetchUsers(this.props.channel.server_id);
        console.log(this.props)

        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data)
                    });
                },
                speak: function(data) {
                    return this.perform("speak", data);
                }
            }
        )
    }

    componentDidUpdate(newProps) {
        if (this.props.match.params.channelId !== newProps.match.params.channelId) {
            this.props.fetchChannelMessages(this.props.channel.id);
            this.props.fetchUsers(this.props.channel.server_id);
        }
        $(".message-ul-container").animate({ scrollTop: $(".message-ul-container")[0].scrollHeight }, "slow");
    }

    
    render() {
        let messages;

        if (this.props.messages) {
            messages = this.props.messages.map(message => {
                let author = this.props.users[message.author_id];
                return <MessageIndexItem message={message} key={message.id} 
                    author={author} />
            });
        }


        const messageList = this.state.messages.map(message => {
            if (message.body.length > 0) {
                let author = this.props.users[message.author_id];
                return (
                    // <li className="message-li-container" key={message.id}>
                    //     {/* { console.log(message)} */}
                    //     { message.body }
                    //     {/* <div ref={this.bottom} /> */}
                    // </li>
                    <MessageIndexItem message={message} key={message.id} 
                    author={author} />
                );
            }
        });

        return(
            <ul className="message-ul-container ">
                { messages }
                { messageList }
            </ul>
        );
    }
}

export default withRouter(MessageIndex);