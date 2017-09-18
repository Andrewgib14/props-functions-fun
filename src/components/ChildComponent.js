import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        return (
            <div>Dumb Component receiving Props
          <div>
                    <input type="submit" onClick={this.props.onClick} />
                </div>
            </div>
        );
    }
}
