import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
        
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then(() => this.props.history.push("/"));
    }

    render() {
        let emailInput = null;
        let submitText = "";
        
        if (this.props.formType === 'signup') {
            emailInput = <label>EMAIL
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-signup-input"
                />
            </label>
            submitText = "Continue";
        } else {
            submitText = "Login";
        }

        return(
            <div className="login-signup-container">
                <form onSubmit={this.handleSubmit} className="login-signup-form">
                    <div>
                        { emailInput }
                        <label>USERNAME
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-signup-input"
                            />
                        </label>
                        <label>PASSWORD
                            <input type="text"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-signup-input"
                            />
                        </label>
                        <input className="session-submit" type="submit" value={submitText}/>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default withRouter(SessionForm);