import React, { Component } from 'react';
import OlgaListItem from './OlgaListItem';
import OlgaListItemPretty from './OlgaListItemPretty';

class OlgaList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            elements: props.source,
            sortDirection: false
        };

        //bind pozwala przypiąć funkcje do .this
        this.updateInput = this.updateInput.bind(this);
        this.sortList = this.sortList.bind(this);
        this.addListItem = this.addListItem.bind(this);
    }

    getValidationError(value) {
        if (!value) {
            return "empty Value not allowed";
        } else if (value.includes("dupa")) {
            return "dupa jest klasyką js";
        } else if (value.length > 5) {
            return " ho ho za duzo";
        }
    }

    addListItem(event) {
        let newElement = this.state.elementValue;
        let validationError = this.getValidationError(newElement);

        if (validationError) {
            this.setState({
                ...this.state,
                validationError: validationError
            })
        } else {
            let elements = this.state.elements;
            elements.push(newElement);

            this.setState({
                ...this.state,
                elements: elements,
                elementValue: "",
            })
        }
    }

    updateInput(event) {
        let validationError = this.getValidationError(event.target.value);

        if (validationError) {
            this.setState({
                ...this.state,
                validationError: validationError,
                elementValue: event.target.value
            })
        } else {
            this.setState({
                ...this.state,
                validationError: "",
                elementValue: event.target.value
            })
        }
    }


    sortList(){
        this.setState({
         ...this.state,
         sortDirection: !this.state.sortDirection 
        })
    }


    render() {
        return (
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action active" onClick={this.sortList}>
                    Liczby
                     {(() => {
                        if (this.state.sortDirection) {
                            return <i className="fas fa-arrow-circle-down" />
                        } else {
                            return <i className="fas fa-arrow-circle-up" />
                        }
                    })()}
                </button>
                {this.state.elements.map((element, index) => {
                    if (element > 4) {
                        return <OlgaListItemPretty content={element} />;
                    } else {
                        return <OlgaListItem content={element} />;
                    }
                })
                }
                <br />
                <input className="form-control" value={this.state.elementValue} type="text" onChange={this.updateInput} />
                {this.state.validationError &&
                    <div style={{ color: "red" }} className="float-left">
                        *{this.state.validationError}
                    </div>
                }
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={this.addListItem}>dodaj</button>
                    </div >
                </div >
            </div>
        );
    }
}

export default OlgaList;
