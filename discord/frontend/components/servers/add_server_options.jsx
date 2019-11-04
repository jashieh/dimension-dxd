import React from 'react';
import ServerForm from './server_form';

export default class AddServerOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentForm: null };

        this.handleClick = this.handleClick.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleClick(type) {
        if(type === 'create') {
            return e => this.setState({ 
                currentForm: <ServerForm createServer={this.props.createServer} 
                toggleForm={this.toggleForm}
            /> });
        } else {

        }
    }

    toggleForm() {
        this.setState({ currentForm: null });
    }
    
    render() {
        let currPage = null;
        if(this.state.currentForm === null) {
            currPage = 
            (<div className="modal-box">
                    <div className="add-server-options-inner">
                    <header className="add-server-options-header">
                        OH, ANOTHER SERVER HUH?
                    </header>
                    <div className="add-server-options-actions">
                        <div className="create-server-options-container">
                            <header className="create-server-options-header">
                                CREATE
                            </header>
                            <p className="create-server-options-body">
                                Create a new server and invite your friends. It's free!
                            </p>
                            <div className="create-server-options-img">
                                img here
                            </div>
                            <button className="create-server-options-button" 
                                onClick={this.handleClick('create')}>
                                Create a server
                            </button>
                        </div>

                        <div className="join-server-options-container">
                            <header className="join-server-options-header">
                                JOIN
                            </header>
                            <p className="join-server-options-body">
                                Enter an invite and join your friend's server
                            </p>
                            <div className="join-server-options-img">
                                img here
                            </div>
                            <button className="join-server-options-button">
                                Join a server
                            </button>
                        </div>  
                    </div>  
                    </div>   
                </div>);
        } else {
            currPage = 
            (<div className="modal-box">
                { this.state.currentForm }
            </div>)
        }
        return(
            <div className="add-server-options-modal">
                { currPage }
            </div>
        );
    }
}
