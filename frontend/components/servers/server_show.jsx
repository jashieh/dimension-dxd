import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container';
import ServerDropdownContainer from './server_dropdown_container';
import ChannelShowContainer from '../channels/channel_show_container';
import ServerUsers from './server_users';
import Modal from '../modal/modal';
import Description from '../hover/description';
import { withRouter } from 'react-router-dom'
import { ProtectedRoute } from "../../util/route_util";

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentChannel: null}
        this.leaveServer = this.leaveServer.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.match.params.serverId)
            .then(()=>{
                this.props.fetchServerChannels(this.props.serverId);
            }, ()=>{
                this.props.history.push('/home');
        });
        
        let collapse = document.getElementsByClassName('channels-dropdown');
        let arrow = document.querySelector('.channels-arrow');
        let channelUl = document.querySelector('.channel-nav-ul');
        for(let i = 0; i < collapse.length; i++) {
            collapse[i].addEventListener('click', function(e) {
                channelUl.classList.toggle('collapse-item');
                arrow.classList.toggle('rotated');
            });
        }

        let serverDropdown = document.querySelector('.single-server-header-container');
        serverDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            this.nextElementSibling.classList.toggle('collapse-item');
        });

        let home = document.querySelector('.home-elements-container');
        home.addEventListener('click', function(e) {
            if (!serverDropdown.nextElementSibling.classList.contains('collapse-item')) {
                serverDropdown.nextElementSibling.classList.add('collapse-item');
            }    
        });
        

        let addServerButton = document.querySelector('.add-channel-button');
        addServerButton.addEventListener('mouseover', function(e) {
            this.nextElementSibling.classList.toggle('collapse-item');
        });

        addServerButton.addEventListener('mouseout', function(e) {
            this.nextElementSibling.classList.toggle('collapse-item');
        });
    }

    componentDidUpdate(newProps) {
        if (this.props.match.params.serverId !== newProps.match.params.serverId) {
            this.props.fetchServerChannels(this.props.serverId);
        }

        // let channelUl = document.querySelector('.channel-nav-ul');
        // let arrow = document.querySelector('.channels-arrow');

        // if (!channelUl.classList.contains('collapse-item')) {
        //     channelUl.classList.add('collapse-item');
        //     arrow.classList.remove('rotated');
        // }
    }

    // componentWillReceiveProps(prevProps) {
    //     if (this.props.match.params.serverId !== prevProps.match.params.serverId) {
    //         console.log('Route change!');
    //         this.props.fetchServerChannels(this.props.serverId);
    //     }
    //     if (newProps !== this.props) {
    //         // this.forceUpdate();
    //     }

    //     let channelUl = document.querySelector('.channel-nav-ul');
    //     let arrow = document.querySelector('.channels-arrow');

    //     if (!channelUl.classList.contains('collapse-item')) {
    //         channelUl.classList.add('collapse-item');
    //         arrow.classList.remove('rotated');
    //     }
    // }

    leaveServer() {
        this.props.leaveServer(this.props.server.id);
        this.props.history.push('/home');
    }


    render() {
        let serverName = "";
        let inviteUrl = "";
        let modal = null;
        let dropdown = null;
        let users;

        if (this.props.server) {
            serverName = this.props.server.server_name;
            inviteUrl = this.props.server.invite_url;
            modal = <Modal server={this.props.server} 
                leaveServer={this.props.leaveServer}/>;
            dropdown = 
                <ServerDropdownContainer serverId={this.props.server.id} 
                    inviteUrl={this.props.server.invite_url} /> 
            users = <ServerUsers users={this.props.server.users} />

        } else {
            serverName = "Server does not exist";
        }

        return(
            <div className="server-show-container">
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
                                {/* <ProtectedRoute exact path="/home/:serverId/channels" component={ChannelIndexContainer} /> */}

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
                                <img src="/discord_user.png" alt=""/>
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
                <div className="server-right-side-container">
                    <div className="server-top-bar-container">
                        Top bar
                    </div>
                    <div className="server-lower-container">
                        <div className="channel-display-container">
                            <ProtectedRoute exact path="/home/:serverId/channels/:channelId" component={ChannelShowContainer} />
                        </div> 
                        <div className="server-users-container">
                            { users }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ServerShow);