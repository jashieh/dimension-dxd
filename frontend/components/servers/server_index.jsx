import React from 'react';
import AddServerOptions from './add_server_options';
import ServerIndexItemContainer from './server_index_item_container';
import LeftNavItem from './left_nav_item';

export default class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: null};

        this.handleAddServer = this.handleAddServer.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllServers()
    }

    toggleModal() {
        this.setState({ modal: null});
    }

    handleAddServer(e) {
        // let backgroundModal = $(".add-server-options-modal");
        // let modalBox = $(".modal-box");
        let doc = $(document);

        let escEvent = (e) => {
            if(e.key === "Escape" || e.type ==="click") {
                doc.off("keydown", escEvent);
                // modalBox.off("click", clickEvent);
                // backgroundModal.off("click", escEvent);
                return this.toggleModal();
            }
        };

        // Flag doesn't work when variable is set??
        this.setState({ modal: <AddServerOptions 
            createServer={this.props.createServer} 
            joinServer={this.props.joinServer}
            toggleModal={this.toggleModal} 
            createChannel={this.props.createChannel}
            className="modal"/>}, () => {
                doc.on("keydown", escEvent);
            }
        );
    }


    render() {
        let display = null;
        if (Object.keys(this.props.servers).length !== 0) {
            display = Object.keys(this.props.servers).map(serverId => {
                return (
                    <ServerIndexItemContainer server={this.props.servers[serverId]} key={serverId}/>
                );
            });
        }

        return(
            // <div className="server-content">
            <nav className="server-nav-container">

                <ul className="server-nav-ul">
                    <LeftNavItem path={"/"} name={<i className="fas fa-arrow-left"></i>} description={"Return to splash"} type={"link"}/>
                    <LeftNavItem path={"/home"} name={<img src="/discord_user.png" alt="" className="message-user-icon"/>} description={"Home"} type={"home"}/>
                    { display }
                    <LeftNavItem name={"+"} description={"Add a Server"} type={"addServer"}
                        action={this.handleAddServer}/>
                </ul>
                { this.state.modal }
            </nav>
            // </div>
        );
    }
}