import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './Section.module.css';

export class Section extends Component {
    static defaultProps = {
        title: '',
        children: React.createElement('div')
    };

    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node,
    };

    render() {
        const { title, children } = this.props;
        return (
            <div>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Section;
