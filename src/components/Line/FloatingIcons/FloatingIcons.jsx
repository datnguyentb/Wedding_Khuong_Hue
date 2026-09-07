import React from 'react';
import classNames from 'classnames/bind';
import styles from './FloatingIcons.module.scss';
import { FaHeart } from 'react-icons/fa'; // Hoặc icon bạn thích

const cx = classNames.bind(styles);

function FloatingIcons() {
    // Tạo mảng giả lập để render ra số lượng icon (ví dụ 15 icon rơi liên tục)
    const iconsList = Array.from({ length: 15 });

    return (
        <div className={cx('floating-container')}>
            {iconsList.map((_, index) => {
                // Random vị trí ngang, thời gian rơi và độ trễ để các icon rơi tự nhiên không đều nhau
                const randomLeft = Math.random() * 100; // từ 0% đến 100% chiều rộng màn hình
                const randomDuration = 5 + Math.random() * 5; // từ 5s đến 10s cho mỗi lượt rơi
                const randomDelay = Math.random() * 5; // độ trễ xuất hiện từ 0s đến 5s
                const randomSize = 12 + Math.random() * 16; // kích thước icon từ 12px đến 28px

                return (
                    <div
                        key={index}
                        className={cx('icon-item')}
                        style={{
                            left: `${randomLeft}%`,
                            animationDuration: `${randomDuration}s`,
                            animationDelay: `${randomDelay}s`,
                            fontSize: `${randomSize}px`,
                        }}
                    >
                        <FaHeart />
                    </div>
                );
            })}
        </div>
    );
}

export default FloatingIcons;
