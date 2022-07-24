import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Notification extends Component {
    static defaultProps = {
        message: 'There is no feedback',
    };

    static propTypes = {
        message: PropTypes.string,
    };

    render() {
        const { message } = this.props;
        return (
            <div>{message}</div>
        )
    }
}

export default Notification