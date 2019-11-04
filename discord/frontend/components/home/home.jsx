import React from 'react';
import { ProtectedRoute } from "../../util/route_util";
import ServerContainer from "../servers/server_index_container";
import ServerShowContainer from "../servers/server_show_container";



export default class Home extends React.Component {

    render() {
        return(
            <div className="home">
                <div className="home-elements-container">
                    <ProtectedRoute path="/home" component={ServerContainer} />
                    <ProtectedRoute path="/home/:serverId" component={ServerShowContainer} />
                </div>
            </div>
            
        );
    }
}