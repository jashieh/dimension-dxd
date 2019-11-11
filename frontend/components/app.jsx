import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

// import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
// import ServerContainer from "./servers/server_index_container";
// import ServerShowContainer from "./servers/server_show_container";
import Home from "./home/home";
import VoiceCall from "./calls/voice_call";


const App = () => (
  <div className="app">
    {/* <Route exact path="/" component={GreetingContainer} /> */}
    <Route path='/call' component={VoiceCall}/>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/home" component={Home} />
    {/* <ProtectedRoute path="/servers" component={ServerContainer} />
    <ProtectedRoute path="/servers/:serverId" component={ServerShowContainer} /> */}
  </div>
);

export default App;