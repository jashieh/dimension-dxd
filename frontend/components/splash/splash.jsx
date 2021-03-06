import React from 'react';
import { Link } from 'react-router-dom';


const backgrounds = ["/home4.mp4","/home3.mp4",'/home.mp4','/home5.mp4'];

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentBackground: backgrounds[0]};
        this.changeTheme = this.changeTheme.bind(this);
    }

    adjustVideoSize() {
        let vid = $(".splash-video");
        if(backgrounds[0] !== "/home4.mp4") {
            vid.addClass("splash-video-other");
        } else {
            vid.removeClass("splash-video-other");
        }
    }

    componentDidMount() {
       this.adjustVideoSize();
    }

    changeTheme(e) {
        backgrounds.push( backgrounds.shift());
        this.adjustVideoSize();
        this.setState({ currentBackground: backgrounds[0] });
    }


    render() {
    const display = this.props.currentUser ? (
      <div className="nav-link">
        <button onClick={this.props.logout} 
            className="login-nav-button">Log Out</button>
      </div>
    ) : (
      <div className="nav-link">
        <Link to="/login" className="login-nav-button">Login</Link>
      </div>
    );
    return (
        <div className="splash">
            <div className="home-video">
                <video ref="vidRef"
                    src={this.state.currentBackground} 
                    autoPlay={true} loop muted={true} 
                    className="splash-video" 
                />
            </div>

            <div className="home-content">
                <nav className="nav-bar">
                    <div className="nav-left">
                        <div className="nav-link">
                            <Link to="/" className="nav-link logo">
                                <div className="logo-icon-container">
                                    <img src="/logo.svg" alt="" className="logo-icon"/>
                                </div>
                                <div className="logo-text">
                                    Dimension
                                </div>
                                <div className="logo-text-upper">
                                    2
                                </div>
                            </Link>
                        </div>
                        <div className="nav-link">
                            <a href="https://github.com/jashieh" target="_blank" >Github</a>
                        </div>
                        <div className="nav-link">
                            <a href="https://www.linkedin.com/in/shieh-justin/" 
                                target="_blank" 
                                className="nav-link">LinkedIn
                            </a>
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
                        Voice chat for engineers
                    </p>
                </div>

                <div className="splash-buttons">
                    <div className="splash-button-item">
                        <button onClick={this.changeTheme} 
                            className="splash-left-button">Change Theme!
                        </button>
                    </div>
                    <div className="splash-button-item">
                        <Link to="/home" className="splash-right-button">
                            Open DxD in your browser
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}