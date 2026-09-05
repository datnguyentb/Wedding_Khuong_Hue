import React from 'react';

import classNames from 'classnames/bind';
import styles from './WeddingEventDetails.module.scss';

const cx = classNames.bind(styles);

export const WeddingEventDetails = () => {
    return (
        <section className={cx('footer-invite', 'scroll-reveal')}>
            <h2 className={cx('script-title', 'inverse')}>Trân Trọng Kính Mời</h2>

            <div className={cx('wedding-gallery')}>
                <div className={cx('gallery-item', 'side')}>
                    <img src="./src/assets/images/2.jpg" alt="Ảnh cưới 1" />
                </div>
                <div className={cx('gallery-item', 'main')}>
                    <img src="./src/assets/images/4.jpg" alt="Ảnh cưới chính" />
                </div>
                <div className={cx('gallery-item', 'side')}>
                    <img src="./src/assets/images/6.jpg" alt="Ảnh cưới 3" />
                </div>
            </div>

            <div className={cx('wedding-gallery', 'pc-gallery-extra')}>
                <div className={cx('gallery-item', 'side')}>
                    <img src="./src/assets/images/3.jpg" alt="Ảnh cưới 4" />
                </div>
                <div className={cx('gallery-item', 'side')}>
                    <img src="./src/assets/images/5.jpg" alt="Ảnh cưới 5" />
                </div>
                <div className={cx('gallery-item', 'side')}>
                    <img src="./src/assets/images/1.jpg" alt="Ảnh cưới 6" />
                </div>
            </div>

            <div className={cx('event-details')}>
                <p className={cx('event-title')}>THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</p>
                <p className={cx('event-sub')}>Vào lúc</p>
                <div className={cx('date-display')}>
                    <div className={cx('time-col')}>11:00</div>
                    <div className={cx('divider')}></div>
                    <div className={cx('day-col')}>
                        <span className={cx('day-name')}>Chủ Nhật</span>
                        <span className={cx('day-number')}>20</span>
                        <span className={cx('month-name')}>Tháng 09</span>
                    </div>
                    <div className={cx('divider')}></div>
                    <div className={cx('year-col')}>2026</div>
                </div>
                <div>
                    <span className={cx('sub-info')}>(Tức ngày 10 tháng 8 năm Bính Ngọ)</span>
                </div>
            </div>
        </section>
    );
};
