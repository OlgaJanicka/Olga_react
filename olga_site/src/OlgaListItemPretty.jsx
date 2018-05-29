import React, { Component } from 'react';


class OlgaListItemPretty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.content
        };
    }

    render() {

        let content=this.state.content;
        return <button type="button" class="list-group-item list-group-item-danger">{content}</button>
    }
}

export default OlgaListItemPretty;
