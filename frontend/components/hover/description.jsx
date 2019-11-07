import React from 'react';

class Description extends React.Component {
    render() {
        return(
            <div className="description collapse-item fade-in">
                { this.props.description }
                {/* { console.log(this.props.description)} */}
            </div>
        );
    }
}

export default Description;
