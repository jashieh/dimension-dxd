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
        .then(() => this.props.history.push(`/home`));
    }

    render() {
        let emailInput = null;
        let submitText = "";
        let headerText = "";
        let headerText2 = "";
        let registerBox = null;

        if (this.props.formType === 'signup') {
            emailInput = <div className="login-field">
                            <label className="login-input-label">EMAIL</label>
                                <div className="login-input-container">
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                    />
                                </div>
                        </div>
            submitText = "Continue";
            headerText = "Create an account";
            registerBox = <div className="register-box">
                <Link to="/login" className="signup-link">Already have an account?</Link>
            </div>
        } else {
            headerText = "Welcome back!";
            headerText2 = "We're so excited to see you again!";
            submitText = "Login";
            registerBox = <div className="register-box">
                <div className="register-text">Need an Account?</div>
                <Link to="/signup" className="signup-link">Register</Link>
            </div>
        }

        return(
            <div className="login-signup-page">
                  <div className="home-video">
                    <video autoPlay={true} loop muted={true} className="login-video">
                        <source src="/home4.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className="login-content">
                    <div className="login-header-container">

                    <div className="return-to-splash">
                        <Link to="/" className="splash-link">Discord</Link>
                    </div>
                    </div>
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
                            <br/>
                        <div className="login-field">
                            <label className="login-input-label">USERNAME</label>
                            <div className="login-input-container">
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="login-field">
                            <label className="login-input-label">PASSWORD</label>
                            <div className="login-input-container">
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="login-button">
                            <input className="session-submit" type="submit" value={submitText}/>
                        </div>
                        { registerBox }
                    </form>
                </div>
                </div>
          </div>
        );
    }
    
}

export default withRouter(SessionForm);