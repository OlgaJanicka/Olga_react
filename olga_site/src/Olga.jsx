import React, { Component } from 'react';


class Olga extends Component {
    render() {
        return (
            <div>
                <h1>
                    czesc jestem Olga
                </h1>
                <button className="btn btn-warning"> {this.props.buttonText}</button>
            </div>
        );
    }
}

export default Olga;
