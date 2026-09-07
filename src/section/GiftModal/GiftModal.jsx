import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './GiftModal.module.scss';

// Import QR chú rể (hoặc giữ nguyên cấu hình QR hiện tại của bạn)
import qrGroomImg from '../../assets/images/qr.jpg';

const cx = classNames.bind(styles);

export const GiftModal = ({ downloadQR }) => {
    // State quản lý trạng thái ẩn/hiện Popup
    const [isOpen, setIsOpen] = useState(false);

    // Mở popup
    const handleOpen = () => setIsOpen(true);

    // Đóng popup
    const handleClose = () => setIsOpen(false);

    // Đóng khi click ngoài vùng content (vào overlay)
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <>
            {/* SECTION 2 BAO LÌ XÌ ĐUNG ĐƯA MỞ MỪNG CƯỚI */}
            <section className={cx('qr-section', 'scroll-reveal')}>
                <h2 className={cx('script-title')}>🧧 Hộp Quà Mừng</h2>

                <div className={cx('lixi-wrapper')} onClick={handleOpen}>
                    {/* Bao lì xì trái */}
                    <div className={cx('lixi-item', 'lixi-left')}>
                        <img
                            src="https://lh3.googleusercontent.com/d/1TxEiKrUvZXDhUVH89yWjCzjG2HAIQXOs=s0"
                            alt="Bao lì xì trái"
                        />
                    </div>

                    {/* Bao lì xì phải */}
                    <div className={cx('lixi-item', 'lixi-right')}>
                        <img
                            src="https://lh3.googleusercontent.com/d/1TxEiKrUvZXDhUVH89yWjCzjG2HAIQXOs=s0"
                            alt="Bao lì xì phải"
                        />
                    </div>
                </div>

                <p className={cx('lixi-hint')} onClick={handleOpen}>
                    Nhấn để mở
                </p>
            </section>

            {/* POPUP HIỂN THỊ KHI ISOPEN = TRUE */}
            {isOpen && (
                <div className={cx('gift-popup-overlay')} onClick={handleOverlayClick}>
                    <div className={cx('gift-popup-content')}>
                        <button className={cx('popup-close-btn')} onClick={handleClose} type="button">
                            ✕
                        </button>
                        <h3 className={cx('popup-title')}>HỘP QUÀ MỪNG</h3>

                        <div className={cx('qr-container-popup')}>
                            <div className={cx('qr-card-popup')}>
                                <h4 className={cx('qr-side-title')}>Chú Rể — Nguyễn Văn Khương</h4>

                                <div className={cx('qr-img-box-popup')}>
                                    <img src={qrGroomImg} alt="QR Chú Rể" id="qrGroomImg" />
                                </div>

                                <p className={cx('qr-bank')}>Vietcombank</p>
                                <p className={cx('qr-account')}>0211000512095</p>
                                <p className={cx('qr-account-name')}>Nguyễn Văn Khương</p>

                                <button
                                    type="button"
                                    className={cx('save-qr-btn')}
                                    onClick={() => downloadQR && downloadQR('qrGroomImg', 'QR_ChuRe_NguyenVanKhuong')}
                                >
                                    <i className="fa-solid fa-download"></i> Tải QR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
