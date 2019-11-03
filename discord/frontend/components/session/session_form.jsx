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
        let headerText = "";
        let headerText2 = "";

        if (this.props.formType === 'signup') {
            emailInput = <div>
                            <label>EMAIL
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-signup-input"
                                />
                            </label>
                        </div>
            submitText = "Continue";
        } else {
            headerText = "Welcome back!";
            headerText2 = "We're so excited to see you again!"
            submitText = "Login";
        }

        return(
            <div className="login-signup-page">
                <div className="login-box">
                    <form onSubmit={this.handleSubmit} className="login-signup-form">
                            <div className="form-header">
                                <div className="form-header-title">
                                    { headerText }
                                </div>
                                    <br/>
                                <div className="form-header-subtitle">
                                    { headerText2 }
                                </div>
                            </div>
                            { emailInput }
                        <div className="login-field">
                            <label className="login-input-label">USERNAME</label>
                            <br/>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </div>
                        <div className="login-field">
                            <label className="login-input-label">PASSWORD</label>
                            <br/>
                            <input type="text"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </div>
                        <div className="login-button">
                            <input className="session-submit" type="submit" value={submitText}/>
                        </div>
                    </form>
                </div>
          </div>
        );
    }
    
}

export default withRouter(SessionForm);