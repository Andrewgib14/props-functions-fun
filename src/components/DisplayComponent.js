import React, { Component } from 'react'

export default class DisplayComponent extends Component {
    render() {
        return (
            <div>{this.props.sayWhat}</div>
        );
    }
}
