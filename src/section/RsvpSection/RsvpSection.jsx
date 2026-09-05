import React from 'react';
import classNames from 'classnames/bind';
import styles from './RsvpSection.module.scss';

const cx = classNames.bind(styles);

export const RsvpSection = () => {
    const onSubmit = () => {
        console.log('submit');
    };
    return (
        <section className={cx('rsvp-section', 'scroll-reveal')}>
            <div className={cx('rsvp-card')}>
                <div className={cx('rsvp-header')}>
                    <h2 className={cx('script-title')}>Xác nhận tham dự</h2>
                    <div className={cx('stamp-icon')}>囍</div>
                </div>

                <form className={cx('rsvp-form')} id="rsvpForm" onSubmit={onSubmit || ((e) => e.preventDefault())}>
                    <div className={cx('form-group')}>
                        <label className={cx('username')} htmlFor="fullName">
                            Họ và tên
                        </label>
                        <input type="text" id="fullName" name="fullName" placeholder="Nhập tên của bạn" required />
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('group-label')}>Bạn sẽ tham dự chứ?</label>
                        <label className={cx('radio-option')}>
                            <input type="radio" name="attendance" value="yes" defaultChecked />
                            <span className={cx('radio-custom')}></span>
                            <span className={cx('option-text')}>Có, tôi sẽ tham dự</span>
                        </label>
                        <label className={cx('radio-option')}>
                            <input type="radio" name="attendance" value="no" />
                            <span className={cx('radio-custom')}></span>
                            <span className={cx('option-text')}>Tôi bận, rất tiếc không thể tham dự</span>
                        </label>
                    </div>

                    <button type="submit" className={cx('submit-btn')}>
                        Gửi xác nhận
                    </button>
                </form>
            </div>
        </section>
    );
};
