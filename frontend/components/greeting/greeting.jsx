import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="logged-in-header">
        <p>Hello, {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div className="login-signup-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <div>
            <Link to="/" className="home-link">
                <h1>Discord</h1>
            </Link>
          {display}
        </div>
      </header>
    )
  }
}