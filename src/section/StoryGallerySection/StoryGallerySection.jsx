import React from 'react';

import classNames from 'classnames/bind';
import styles from './StoryGallerySection.module.scss';

const cx = classNames.bind(styles);

export const StoryGallerySection = () => {
    return (
        <>
            <section className={cx('love-quote-section', 'scroll-reveal')}>
                <p className={cx('quote-text')}>Hạnh phúc lớn nhất chính là có thể đặt tay mình vào tay em.</p>
                <div className={cx('card-hero-photo')}>
                    <div className={cx('names-side')}>
                        <span>Khương</span>
                        <span className={cx('ampersand')}>&</span>
                        <span>Huế</span>
                    </div>
                    <div className={cx('photo-side')}>
                        <img src="./src/assets/images/3.jpg" alt="Ảnh đôi" />
                    </div>
                </div>
            </section>

            <section className={cx('story-gallery-section', 'scroll-reveal')}>
                <p className={cx('quote-text')}>
                    Em không phải là điểm cuối của tình yêu, mà là động lực nguyên sơ của nó. Vì em, anh đã yêu thế giới
                    này.
                </p>
                <div className={cx('grid-2-col')}>
                    <div className={cx('img-box')}>
                        <img src="./src/assets/images/1.jpg" alt="Ảnh cưới 1" />
                    </div>
                    <div className={cx('img-box')}>
                        <img src="./src/assets/images/2.jpg" alt="Ảnh cưới 2" />
                    </div>
                </div>
                <div className={cx('grid-1-col')}>
                    <div className={cx('img-box')}>
                        <img src="./src/assets/images/7.jpg" alt="Ảnh cưới 3" />
                    </div>
                </div>
                <div className={cx('chapter-title')}>
                    <h3>Chapter Three</h3>
                    <p className={cx('sub-quote')}>" Giữa thế gian huyên náo, em là điều duy nhất đáng giá. "</p>
                </div>

                <div className={cx('grid-2-col', 'pc-extra-row')}>
                    <div className={cx('img-box')}>
                        <img src="./src/assets/images/9.jpg" alt="Ảnh cưới 6" />
                    </div>
                    <div className={cx('img-box')}>
                        <img src="./src/assets/images/5.jpg" alt="Ảnh cưới 7" />
                    </div>
                </div>
            </section>
        </>
    );
};
