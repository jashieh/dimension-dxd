import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { channel_name: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({ channel_name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.props.serverId, this.state).then(
            (payload) => {this.props.closeModal();}
        );
    }


    render() {
        return(
            <div className="channel-form-container">
                <form className="channel-form" onSubmit={this.handleSubmit}>
                    <div className="channel-form-head-container">
                            <div className="channel-form-header">
                                CREATE NEW CHANNEL
                            </div>
                            <div className="channel-form-catagory">
                                in Catagory /////
                            </div>
                    </div>
                    <div className="channel-form-field-container">
                        <div className="channel-form-input-header">
                            CHANNEL TYPE
                        </div>
                        <div className="channel-form-input-container">
                            <input type="checkbox" className="channel-form-checkbox"/>
                            <div>
                                #
                            </div>
                            <div>
                                Text Channel
                            </div>
                        </div>
                    </div>
                    <div className="channel-form-field-container">
                        <div className="channel-form-input-header">
                            CHANNEL NAME
                        </div>
                        <div className="channel-form-input-container">
                            <input type="text" className="channel-form-input" onChange={this.update}/>
                        </div>
                    </div>

                    <div className="channel-form-footer">
                        <div className="channel-form-cancel-container">
                            <div className="channel-form-cancel" onClick={this.props.closeModal}>
                                Cancel
                            </div>
                        </div>
                        <div className="channel-form-submit-container">
                            <button className="channel-form-submit-button">
                                Create Channel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(ChannelForm);