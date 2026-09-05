import React from 'react';
import classNames from 'classnames/bind';
import styles from './VenueSection.module.scss';
import Line from '../../components/line/line.jsx';

const cx = classNames.bind(styles);

export const VenueSection = () => {
    return (
        <>
            <section className={cx('venue-section', 'scroll-reveal')}>
                <div className={cx('venue-card')}>
                    {/* Header: Tiêu đề + Icon bản đồ bên phải */}
                    <div className={cx('venue-header')}>
                        <h2 className={cx('script-title')}>Địa Điểm Tổ Chức 🗺️</h2>
                    </div>

                    {/* Tên địa điểm chữ viết tay uốn lượn */}
                    <p className={cx('venue-address')}>Thôn Kênh Đào, xã Vũ Tiên, tỉnh Hưng Yên</p>

                    {/* Bản đồ Embed */}
                    <div className={cx('map-container')}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.5583478528943!2d106.27138531308914!3d20.336797278199313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e305978feaad%3A0x56795b2f4691f396!2zTmjDoCB2xINuIGjDs2EgdGjDtG4gS8OqbmggxJDDoG8sIFbFqSBUaMawLCBUaMOhaSBCw6xuaA!5e0!3m2!1svi!2s!4v1788525650446!5m2!1svi!2s"
                            width="100%"
                            height="260"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className={cx('map-btn-box')}>
                        <a
                            href="https://maps.app.goo.gl/kJaeNam5m5Q2N6W36"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cx('open-map-btn')}
                        >
                            📍 Xem chỉ đường trên Google Maps
                        </a>
                    </div>

                    {/* Vết khuyết hình tròn ở mép dưới */}
                    <div className={cx('notch-bottom')}></div>
                </div>
            </section>
            <Line type="notch" />
        </>
    );
};
