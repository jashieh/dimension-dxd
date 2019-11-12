import React from 'react';

class Loading extends React.Component {
    render() {
        return(
            <div className="loading-background">
                <img src="/loading.gif" alt="" className="loading"/>
            </div>
        );
    }
}

export default Loading;