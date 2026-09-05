import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './GiftModal.module.scss';

// Import hình ảnh từ thư mục assets
import giftImg from '../../assets/images/gift.png';
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
            {/* SECTION NÚT BẤM MỞ HỘP QUÀ */}
            <section className={cx('qr-section', 'scroll-reveal')}>
                <h2 className={cx('script-title')}>🧧 Hộp Quà Mừng</h2>
                <button className={cx('gift-box-btn')} onClick={handleOpen} type="button">
                    <img src={giftImg} alt="Hộp Quà Mừng" className={cx('gift-icon-img')} />
                    <span className={cx('gift-btn-text')}>Bấm để mở 💝</span>
                </button>
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
