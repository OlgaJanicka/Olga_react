import React, { Component } from 'react';
import OlgaListItem from './OlgaListItem';
import OlgaListItemPretty from './OlgaListItemPretty';

class OlgaList extends Component {


    render() {

        return (
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">
                    Liczby
                     {(() => {
                        if (this.props.sortDirection) {
                            return <i className="fas fa-arrow-circle-down" />
                        } else {
                            return <i className="fas fa-arrow-circle-up" />
                        }
                    })()}
                </button>
                {this.props.source.map((element, index) => {
                    if (element > 4) {
                        return <OlgaListItemPretty content={element} />;
                    } else {
                        return <OlgaListItem content={element} />;
                    }
                })
                }
            </div>
        );
    }
}

export default OlgaList;
