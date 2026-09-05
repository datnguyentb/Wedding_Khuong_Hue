import React from 'react';
import classNames from 'classnames/bind';
import styles from './Line.module.scss';

const cx = classNames.bind(styles);

function Line({ type = 'line' }) {
    return <div className={cx('custom-line', type)}></div>;
}

export default Line;
