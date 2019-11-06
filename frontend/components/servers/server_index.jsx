import React from 'react';
import AddServerOptions from './add_server_options';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';

export default class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: null};

        this.handleAddServer = this.handleAddServer.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllServers();
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
                    <ServerIndexItem server={this.props.servers[serverId]} key={serverId}/>
                );
            });
        }
        
        return(
            // <div className="server-content">
            <nav className="server-nav-container">
                <ul className="server-nav-ul">
                    <li className="server-nav-li">
                        <Link to="/" className="server-nav-button">Splash</Link>
                    </li>

                    <li className="server-nav-li">
                        <Link to="/home" className="server-nav-button">Home</Link>
                    </li>
                    { display }
                    <li className="server-nav-li">
                        <button onClick={this.handleAddServer}
                            className="server-nav-button">
                            +
                        </button>
                    </li>
                </ul>
                { this.state.modal }
            </nav>
            // </div>
        );
    }
}