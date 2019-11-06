import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container';
import Modal from '../modal/modal';

import { withRouter } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';



class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.leaveServer = this.leaveServer.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId)
            .then(()=>{}, ()=>{
                this.props.history.push('/home');
        });
        
        let collapse = document.getElementsByClassName('channels-header');
        for(let i = 0; i < collapse.length; i++) {
            collapse[i].addEventListener('click', function(e) {
                this.nextElementSibling.classList.toggle('collapse-item');
            });
        }
    }

    leaveServer() {
        // this.props.leaveServer(this.props.match.params.serverId);
        this.props.leaveServer(this.props.server.id);
    }

    render() {
        let serverName = "";
        let inviteUrl = "";
        let modal = null;
        if (this.props.server) {
            serverName = this.props.server.server_name;
            inviteUrl = this.props.server.invite_url;
            modal = <Modal serverId={this.props.server.id}/>;
        } else {
            serverName = "Server does not exist";
        }

        return(
            <div className="single-server-show">
                { modal }
                <div className="single-server-header-container">
                    <label className="single-server-header-name">
                        {serverName}
                    </label>
                </div>
                <div className="channel-list">
                    <ul className="channels">
                        <div className="channels-container">
                            <div className="channels-header">
                                <div>
                                    >
                                </div>
                                <div className="channels-header-element">
                                    TEXT CHANNELS
                                </div>
                                <div className="channels-header-element">
                                    { this.props.otherForm }
                                </div>
                            </div>
                            <ChannelIndexContainer />
                        </div>
                    </ul>

                    
{/* 
                    <ul className="channels">
                        <div className="channels-container">
                            <label className="channel-header">
                                VOICE CHANNELS
                            </label>
                        </div>
                    </ul> */}

                </div>
                <button onClick={this.leaveServer}>Leave Server</button>
                
                <div className="footer-util-container">
                    <div className="user-icon-container">
                        <div className="user-icon">
                            user icon 
                        </div>
                    </div>
                    <div className="footer-user-info">
                        <div className="footer-user-name">
                            {this.props.currentUser.username}
                        </div>
                        <div className="footer-user-id">
                            #{this.props.currentUser.id}
                        </div>
                    </div>
                    <div className="footer-button-container">
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ServerShow);