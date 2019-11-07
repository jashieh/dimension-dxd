import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container';
import Modal from '../modal/modal';
import ServerDropdownContainer from './server_dropdown_container';
import Description from '../hover/description';

import { withRouter } from 'react-router-dom'



class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.leaveServer = this.leaveServer.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId)
            .then(()=>{
                // this.props.fetchServerChannels(this.props.serverId);
            }, ()=>{
                this.props.history.push('/home');
        });
        
        let collapse = document.getElementsByClassName('channels-header');
        let arrow = document.querySelector('.channels-arrow');
        for(let i = 0; i < collapse.length; i++) {
            collapse[i].addEventListener('click', function(e) {
                this.nextElementSibling.classList.toggle('collapse-item');
                arrow.classList.toggle('rotated');
            });
        }

        let serverDropdown = document.querySelector('.single-server-header-container');
        serverDropdown.addEventListener('click', function(e) {
            this.nextElementSibling.classList.toggle('collapse-item');
        });

        let addServerButton = document.querySelector('.add-channel-button');
        addServerButton.addEventListener('mouseover', function(e) {
            this.nextElementSibling.classList.toggle('collapse-item');
        });
        addServerButton.addEventListener('mouseout', function(e) {
            this.nextElementSibling.classList.toggle('collapse-item');
        });


        // let homeScreen = document.querySelector('.home-elements-container');
        // let dropdown = document.querySelector('.server-dropdown-container');
        // homeScreen.addEventListener('click', function(e) {
        //     if (dropdown.classList.contains('collapse-item')) {
        //         console.log("test");
        //         dropdown.classList.toggle('collapse-item');
        //     }
        // });
    }

    componentWillReceiveProps(newProps) {
        if (newProps !== this.props) {
            this.props.fetchServerChannels(this.props.serverId);
            this.forceUpdate();
          }
    }

    leaveServer() {
        this.props.leaveServer(this.props.server.id);
        this.props.history.push('/home');
    }

    render() {
        let serverName = "";
        let inviteUrl = "";
        let modal = null;
        let dropdown = null;

        if (this.props.server) {
            serverName = this.props.server.server_name;
            inviteUrl = this.props.server.invite_url;
            modal = <Modal server={this.props.server}/>;
            dropdown = 
                <ServerDropdownContainer serverId={this.props.server.id} 
                    inviteUrl={this.props.server.invite_url} /> 

        } else {
            serverName = "Server does not exist";
        }

        return(
            <div className="single-server-show fade-in">
                { modal }
                <div className="single-server-header-container">
                    <div className="single-server-header-name">
                        {serverName}
                    </div>
                    <div className="single-server-header-arrow">
                        >
                    </div>
                </div>
                { dropdown }
                <div className="channel-list">
                    <ul className="channels">
                        <div className="channels-container">
                            <div className="channels-header">
                                <div className="channels-dropdown">
                                    <div className="channels-arrow">
                                        >
                                    </div>
                                    <div className="channels-header-element">
                                        TEXT CHANNELS
                                    </div>
                                </div>
                                <div className="channels-header-create-button">
                                    { this.props.otherForm }
                    
                                    <Description description={"Create Channel"} type="channel-hover"/>

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