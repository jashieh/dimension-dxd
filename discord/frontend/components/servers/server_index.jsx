import React from 'react';
import AddServerOptions from './add_server_options';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';

export default class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: null}
        this.handleAddServer = this.handleAddServer.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllServers();
    }

    handleAddServer(e) {
        let backgroundModal = $(".add-server-options-modal");
        let doc = $(document);
        let modalBox = $(".modal-box");

        let escEvent = (e) => {
            console.log("test");
            if(e.key === "Escape" || e.type ==="click") {
                doc.off("keydown", escEvent);
                modalBox.off("click", clickEvent);
                backgroundModal.off("click", escEvent);
                return this.setState({ modal: null});
            }
        };

        let clickEvent = (e) => {
            e.stopPropagation();
        }

        // Flag doesn't work when variable is set??
        this.setState({ modal: <AddServerOptions 
            createServer={this.props.createServer} 
            className="modal"/>}, () => {
                doc.on("keydown", escEvent);
                // $(".modal-box").on("click", clickEvent);
                // $(".add-server-options-modal").on("click", escEvent);
            }
        );
    }


    render() {
        let display = null;
        if (Object.keys(this.props.servers).length === 0) {
            display = (<div>nothing here</div>);
        } else {
            display = Object.keys(this.props.servers).map(serverId => {
                return (
                    <ServerIndexItem server={this.props.servers[serverId]} key={serverId}/>
                );
            });
        }
        
        return(
            <div className="server-content">
                <nav className="server-nav-container">
                    <ul className="server-nav-ul">
                        <li className="server-nav-li">
                            <Link to="/" className="server-nav-button">Return to splash</Link>
                        </li>
                        <li className="server-nav-li">
                            <button className="server-nav-button">
                                Home
                            </button>
                        </li>
                        { display }
                        <li className="server-nav-li">
                            <button onClick={this.handleAddServer}
                                className="server-nav-button">
                                Create Server
                            </button>
                        </li>
                    </ul>
                </nav>
                { this.state.modal }
            </div>
        );
    }
}