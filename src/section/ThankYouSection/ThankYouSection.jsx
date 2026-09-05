import React from 'react';

import classNames from 'classnames/bind';
import styles from './ThankYouSection.module.scss';

const cx = classNames.bind(styles);

export const ThankYouSection = () => {
    return (
        <section className={cx('thank-you-section', 'scroll-reveal')}>
            <div className={cx('thank-you-border-top')}></div>
            <div className={cx('thank-you-content')}>
                <p className={cx('thank-you-quote')}>
                    " Sự hiện diện của bạn là món quà đẹp nhất cho tình yêu chúng tôi "
                </p>
                <h2 className={cx('thank-you-title')}>Cảm Ơn & Trân Trọng !</h2>
                <div className={cx('thank-you-names')}>
                    <span>Văn Khương</span>
                    <span className={cx('heart-icon')}>❤️</span>
                    <span>Thu Huế</span>
                </div>
                <p className={cx('thank-you-date')}>20 · 09 · 2026</p>
            </div>
            <div className={cx('thank-you-border-bottom')}></div>
        </section>
    );
};
