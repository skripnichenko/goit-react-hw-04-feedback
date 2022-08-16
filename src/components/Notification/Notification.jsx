import React from 'react';
import PropTypes from "prop-types";

const Notification = ({ message = 'There is no feedback' }) => <div>{message}</div>;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification