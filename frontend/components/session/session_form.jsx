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
        this.demoUser = this.demoUser.bind(this);
        this.errors = this.errors.bind(this);
    }

    componentDidMount() {
        this.props.removeErrors();
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => {
                this.props.history.push('/loading');
                setTimeout(() => {
                    this.props.history.push(`/home`);
                }, 2000)
            });
    }

    demoUser() {
        let user = 'DemoUser';
        let that = this;
        for (let i = 0; i < user.length; i++) {
            setTimeout(function() {
                that.setState({username: that.state.username + user[i]}); 
            }, i * 50, i);
        }

        let pass = 'demo_user';
        for (let i = 0; i < pass.length; i++) {
            setTimeout(function() {
                that.setState({password: that.state.password + pass[i]}); 
            }, i * 50 + 400, i);
        }

        setTimeout(()=>{
            this.props.processForm(this.state)
                .then(() => {
                    this.props.history.push('/loading');
                    setTimeout(() => {
                        this.props.history.push(`/home`);
                    }, 2000)
                });
        }, 900);
    }

    errors(field) {
        if (this.props.errors.length > 0) {
            for (let i = 0; i < this.props.errors.length; i++) {
                if (this.props.errors[i].includes(field)) {
                    return " - " + this.props.errors[i];
                }
            }
        }
    }

    classError(field) {
        if (this.errors(field)) {
            return "error";
        } else {
            return "";
        }
    }

    render() {
        let emailInput = null;
        let submitText = "";
        let headerText = "";
        let headerText2 = "";
        let registerBox = null;
        let demo = null;
        let submitType = "";
        let userFocus = false;


        if (this.props.formType === 'signup') {
            emailInput = <div className="login-field">
                <label className={this.classError("Username") + " login-input-label"}>
                    EMAIL
                    <div className="errors">
                        {this.errors("Email")}
                    </div>
                </label>
                <div className="login-input-container">
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        autoFocus
                    />
                </div>
            </div>
            submitText = "Continue";
            submitType = "continue-button";
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
            demo = <div className="demo-user-button">
                <input type="text" className="demo-user"
                    type="submit" value="Demo"
                    onClick={this.demoUser} />
            </div>
            submitType = "login-button";
            userFocus = true;
        }

        return (
            <div className="login-signup-page">
                <div className="home-video">
                    <video autoPlay={true} loop muted={true} className="login-video">
                        <source src="/home4.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="login-content-container">
                    <div className="login-content">
                        <div className="login-header-container">
                            <div className="return-to-splash">
                                <Link to="/" className="splash-link login-logo">
                                    <div className="login-logo-icon-container">
                                        <img src="/logo.svg" alt="" className="logo-icon" />
                                    </div>
                                    <div className="splash-link-text">
                                        Dimension
                                    </div>
                                    <div className="splash-link-upper">
                                        2
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="login-box">
                            <form className="login-signup-form">
                                <div className="form-header">
                                    <div className="form-header-title">
                                        {headerText}
                                    </div>
                                    <br />
                                    <div className="form-header-subtitle">
                                        {headerText2}
                                    </div>
                                </div>
                                {emailInput}
                                <br />
                                <div className="login-field">
                                    <label className={this.classError("Username") + " login-input-label"}>
                                        USERNAME
                                <div className="errors">
                                            {this.errors("Username")}
                                        </div>
                                    </label>
                                    <div className="login-input-container">
                                        <input type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                            className="login-input"
                                            autoFocus={userFocus}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="login-field">
                                    <label className={this.classError("Password") + " login-input-label"}>
                                        PASSWORD
                                <div className="errors">
                                            {this.errors("Password")}
                                        </div>
                                    </label>
                                    <div className="login-input-container">
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="login-input"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="login-button-container">
                                    <div className={submitType}>
                                        <input className="session-submit" type="submit"
                                            value={submitText} onClick={this.handleSubmit}
                                        />
                                    </div>
                                    {demo}
                                </div>
                                {registerBox}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(SessionForm);