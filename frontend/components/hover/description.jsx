import React from 'react';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.type = this.type.bind(this);
    }

    type() {
        if (this.props.type === "server-hover")
            return this.props.type + " fade-in";
        return this.props.type + " collapse-item fade-in";
    }
    
    render() {
        return(
            <div className={ this.type() }>
                { console.log("d")}
                { this.props.description }
            </div>
        );
    }
}

export default Description;
