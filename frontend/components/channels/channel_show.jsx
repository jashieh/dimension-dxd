import React from 'react';
import MessageForm from '../messages/message_form';
import MessageFormContainer from '../messages/message_form_container';
import MessageIndexContainer from '../messages/message_index_container';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidUpdate() {
        // this.bottom.current.scrollIntoView();

    }
    
    
    render() {
        let messageForm = null;
        let messageIndex = null;

        if(this.props.channel) {
            messageForm = <MessageFormContainer channel={this.props.channel} />;
            messageIndex = <MessageIndexContainer channel={this.props.channel} />;
        }

        return(
            // <div className="channel-show-container">
                <div className="channel-message-container">
                    { messageIndex }
                    {/* <div>tesasdasdasdasd    t</div> */}
                    { messageForm }
                </div>
            // </div>
        );
    }
}

export default ChannelShow;