import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './InvitationSection.module.scss';
import Line from '../../components/line/line';

const cx = classNames.bind(styles);

export const InvitationSection = () => {
    // Ngày mục tiêu: 11:00 AM, ngày 20/09/2026
    const TARGET_DATE = new Date('2026-09-20T11:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = TARGET_DATE - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, [TARGET_DATE]);

    return (
        <>
            <section className={cx('invitation-section', 'scroll-reveal')}>
                <div className={cx('ticket-card')}>
                    {/* Phần 1: Tiêu đề */}
                    <h2 className={cx('script-title')}>Wedding Invitation</h2>
                    <div className={cx('card-divider')}></div>

                    {/* Phần 2: Nội dung chính */}
                    <div className={cx('card-content')}>
                        <div className={cx('parents-grid')}>
                            <div className={cx('family-info')}>
                                <h3 className={cx('side-title')}>Nhà trai</h3>
                                <p className={cx('parent-name')}>Ông Nguyễn Văn Khả</p>
                                <p className={cx('parent-name')}>Bà Lưu Thị Hòa</p>
                            </div>

                            <div className={cx('family-info')}>
                                <h3 className={cx('side-title')}>Nhà gái</h3>
                                <p className={cx('parent-name')}>Ông Vũ Văn Rường</p>
                                <p className={cx('parent-name')}>Bà Phạm Thị Tơ</p>
                            </div>
                        </div>

                        <div className={cx('avatars-row')}>
                            <div className={cx('avatar-item')}>
                                <img src="./src/assets/images/chu_re.jpg" alt="Chú rể Nguyễn Văn Khương" />
                            </div>
                            <div className={cx('avatar-item')}>
                                <img src="./src/assets/images/co_dau.jpg" alt="Cô dâu Vũ Thu Huế" />
                            </div>
                        </div>

                        <div className={cx('names-row')}>
                            <span className={cx('person-name')}>Nguyễn Văn Khương</span>
                            <span className={cx('ampersand')}>&</span>
                            <span className={cx('person-name')}>Vũ Thu Huế</span>
                        </div>

                        {/* Countdown hiển thị thời gian thực */}
                        <div className={cx('countdown-box')}>
                            <div className={cx('time-item')}>
                                <span className={cx('number')}>{timeLeft.days}</span>
                                <span className={cx('label')}>ngày</span>
                            </div>
                            <div className={cx('time-item')}>
                                <span className={cx('number')}>{timeLeft.hours}</span>
                                <span className={cx('label')}>giờ</span>
                            </div>
                            <div className={cx('time-item')}>
                                <span className={cx('number')}>{timeLeft.minutes}</span>
                                <span className={cx('label')}>phút</span>
                            </div>
                            <div className={cx('time-item')}>
                                <span className={cx('number')}>{timeLeft.seconds}</span>
                                <span className={cx('label')}>giây</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Line type="notch" />
        </>
    );
};
