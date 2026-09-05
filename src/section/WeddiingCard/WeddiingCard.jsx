import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './WeddiingCard.module.scss';

// ✅ Import trực tiếp ảnh để tránh lỗi đường dẫn tĩnh
import flowerDecoration from '../../assets/images/flower2-decoration.webp';

const cx = classNames.bind(styles);

function WeddiingCard({ setIsPlaying }) {
    const [isHidden, setIsHidden] = useState(false);
    const [isUnmounted, setIsUnmounted] = useState(false); // ✅ Gỡ hoàn toàn khỏi DOM

    useEffect(() => {
        // ❌ Không chạy interval nếu thiệp đã ẩn
        if (isHidden) return;

        const container = document.getElementById('heartsRain');
        if (!container) return;

        const interval = setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add(cx('heart-fall'));
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 3 + 's';
            heart.style.fontSize = Math.random() * 12 + 10 + 'px';

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }, 400);

        return () => clearInterval(interval);
    }, [isHidden]); // ✅ Thêm dependency isHidden vào đây

    const handleOpenInvitation = () => {
        setIsHidden(true);
        if (typeof setIsPlaying === 'function') {
            setIsPlaying(true);
        }

        // ✅ Chờ hiệu ứng mờ dần (1s) xong thì gỡ bỏ hoàn toàn khỏi DOM
        setTimeout(() => {
            setIsUnmounted(true);
        }, 1000);
    };

    // Nếu đã gỡ thì không render gì nữa để giải phóng RAM/GPU
    if (isUnmounted) return null;

    return (
        <div>
            <div className={cx('coverPage', { 'hidden-cover': isHidden })}>
                <div className={cx('cover-bg')}></div>
                <div className={cx('cover-card')}>
                    <div className={cx('floral-decoration', 'left')}>
                        <img src={flowerDecoration} alt="Hoa trang trí" />
                    </div>
                    <div className={cx('cover-card-content')}>
                        <div className={cx('heart-icon-circle')}>❤️</div>
                        <h2 className={cx('cover-names')}>
                            Anh Khương
                            <br />
                            <span className={cx('ampersand')}>&</span>
                            <br />
                            Thu Huế
                        </h2>
                        <div className={cx('divider-line')}>
                            <span className={cx('divider-dot')}>✿</span>
                        </div>
                        <p className={cx('cover-date')}>20 tháng 9, 2026</p>
                        <p className={cx('cover-greeting')}>Thân Mời</p>
                        <button className={cx('open-invitation-btn')} onClick={handleOpenInvitation}>
                            <span>Mở thiệp</span>
                        </button>
                    </div>
                    <div className={cx('floral-decoration', 'right')}>
                        <img src={flowerDecoration} alt="Hoa trang trí" />
                    </div>
                </div>
            </div>
            <div id="heartsRain"></div>
        </div>
    );
}

export default WeddiingCard;
