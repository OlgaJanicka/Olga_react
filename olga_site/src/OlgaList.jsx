import React, { Component } from 'react';


class OlgaList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [5, 2, 8, 4, 5]
        };
    }

    render() {
        let {elements}=this.state;

        return (
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">
                    Liczby
                </button>
                {elements.map(element=>{
                  return <button type="button" class="list-group-item list-group-item-action">{element}</button>  
                })
                }
            </div>
        );
    }
}

export default OlgaList;
