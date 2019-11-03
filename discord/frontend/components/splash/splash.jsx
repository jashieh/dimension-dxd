import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="nav-link">
        <Link to="/">Open</Link>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div className="nav-link">
        <Link to="/login" className="login-nav-button">Login</Link>
      </div>
    );
    
    return (
        <div className="splash">
            <nav className="nav-bar">
                <div className="nav-left">
                    <div className="nav-link">
                        <Link to="/" className="nav-link">Discord</Link>
                    </div>
                    <div className="nav-link">
                        <a href="https://github.com/jashieh" target="_blank" >Github</a>
                    </div>
                    <div className="nav-link">
                        <a href="https://www.linkedin.com/in/shieh-justin/" target="_blank" className="nav-link">LinkedIn</a>
                    </div>
                </div>
                <div className="nav-right">
                    {display}
                </div>
            </nav>

            <div className="splash-title">
                <header className="splash-content-header">
                    It's time to ditch Skype and TeamSpeak.
                </header>
                <br/>
                <p className="splash-content-p">
                    Voice chat for virgin engineers
                </p>
            </div>
        </div>
    );
  }
}