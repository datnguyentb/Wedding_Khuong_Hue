import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RsvpSection.module.scss';

const cx = classNames.bind(styles);

const APPSCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbwQNM3aOMtUFMARXs7JS8Y5xs0aLEbQK5AYLHPq7odGIYRKI89g1mwRJIlBCIHcZPyI/exec';

export const RsvpSection = () => {
    const [name, setName] = useState('');
    const [attendance, setAttendance] = useState('Có, tôi sẽ tham dự');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedName = name.trim();

        if (!trimmedName) {
            alert('⚠️ Vui lòng nhập Họ và tên!');
            return;
        }

        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const formData = new URLSearchParams();
            formData.append('name', trimmedName);
            formData.append('attendance', attendance);
            formData.append('type', 'rsvp'); // Phân biệt để ghi vào file tham_gia.gs / tab Xac_nhan

            await fetch(APPSCRIPT_URL, {
                method: 'POST',
                body: formData,
            });

            setName('');
            setShowSuccessModal(true);
        } catch (err) {
            alert('❌ Có lỗi xảy ra, vui lòng thử lại: ' + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={cx('rsvp-section', 'scroll-reveal')}>
            <div className={cx('rsvp-card')}>
                <div className={cx('rsvp-header')}>
                    <h2 className={cx('script-title')}>Xác nhận tham dự</h2>
                    <div className={cx('stamp-icon')}>囍</div>
                </div>

                <form className={cx('rsvp-form')} id="rsvpForm" onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label className={cx('username')} htmlFor="fullName">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Nhập tên của bạn"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('group-label')}>Bạn sẽ tham dự chứ?</label>
                        <label className={cx('radio-option')}>
                            <input
                                type="radio"
                                name="attendance"
                                value="Có, tôi sẽ tham dự"
                                checked={attendance === 'Có, tôi sẽ tham dự'}
                                onChange={(e) => setAttendance(e.target.value)}
                            />
                            <span className={cx('radio-custom')}></span>
                            <span className={cx('option-text')}>Có, tôi sẽ tham dự</span>
                        </label>
                        <label className={cx('radio-option')}>
                            <input
                                type="radio"
                                name="attendance"
                                value="Tôi bận, rất tiếc không thể tham dự"
                                checked={attendance === 'Tôi bận, rất tiếc không thể tham dự'}
                                onChange={(e) => setAttendance(e.target.value)}
                            />
                            <span className={cx('radio-custom')}></span>
                            <span className={cx('option-text')}>Tôi bận, rất tiếc không thể tham dự</span>
                        </label>
                    </div>

                    <button type="submit" className={cx('submit-btn')} disabled={isSubmitting}>
                        {isSubmitting ? '⏳ Đang gửi...' : 'Gửi xác nhận'}
                    </button>
                </form>
            </div>

            {/* POP-UP THÔNG BÁO THÀNH CÔNG */}
            {showSuccessModal && (
                <div className={cx('modal-overlay')} onClick={() => setShowSuccessModal(false)}>
                    <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                        <div className={cx('modal-icon')}>💌</div>
                        <h3>Xác Nhận Thành Công!</h3>
                        <p>Cảm ơn bạn đã gửi xác nhận tham dự lễ cưới của bọn mình ❤️</p>
                        <button className={cx('modal-close-btn')} onClick={() => setShowSuccessModal(false)}>
                            Đóng lại
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
