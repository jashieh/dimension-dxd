import React from 'react';
import AddServerOptions from './add_server_options';

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
        this.setState({ modal: <AddServerOptions 
            createServer={this.props.createServer}/>});
    }

    render() {
        let display = null;
        if (Object.keys(this.props.servers).length === 0) {
            display = (<div>nothing here</div>);
        } else {
            console.log(this.props.servers)
            display = Object.keys(this.props.servers).map(serverId => {
                return (
                    <li>Test</li>
                );
            });
        }
        
        return(
            <nav className="server-nav-container">
                <h1>Servers</h1>
                <ul>
                    { display }
                </ul>
                <button onClick={this.handleAddServer}>Create Server</button>
                { this.state.modal }
            </nav>
        );
    }
}