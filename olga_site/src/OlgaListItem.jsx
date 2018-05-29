import React, { Component } from 'react';


class OlgaListItem extends Component {


    render() {


        return <button type="button" class="list-group-item list-group-item-action">{this.props.content}</button>
    }
}

export default OlgaListItem;
