import classNames from 'classnames/bind';
import styles from './HeroSection.module.scss';
import doubleHappinessImg from '../../assets/images/囍.png';

// Import cả 3 ảnh vào
import coupleDefault from './../../assets/images/couple.jpg';
import couple1 from './../../assets/images/couple_1.jpg';
import couple2 from './../../assets/images/couple_2.jpg';

const cx = classNames.bind(styles);

// Mảng chứa danh sách các ảnh
const coupleImages = [coupleDefault, couple1, couple2];

function HeroSection() {
    // Lấy ngẫu nhiên 1 ảnh từ mảng khi component render
    const randomCoupleImg = coupleImages[Math.floor(Math.random() * coupleImages.length)];

    return (
        <div className={cx('wrapper')}>
            <header id="header" className={cx('header')}>
                <div className={cx('date')}>
                    <p className={cx('save-the-date')}>Save The Date</p>
                    <div className={cx('date-divider')}>
                        <span className={cx('line')}></span>
                        <p className={cx('wedding-date')}>20 . 09 . 2026</p>
                        <span className={cx('line')}></span>
                    </div>
                </div>
                <h1 className={cx('couple-names')}>
                    <span className={cx('groom')}>Văn Khương</span>
                    <span className={cx('ampersand')}>&</span>
                    <span className={cx('bride')}>Thu Huế</span>
                </h1>
            </header>

            <section className={cx('couple-img-box')}>
                <div className={cx('img-frame')}>
                    {/* Chữ Hỷ đặt trước ảnh để nằm ở lớp nền phía sau */}
                    <div className={cx('double-happiness')}>
                        <img src={doubleHappinessImg} alt="Chữ Hỷ đôi" />
                    </div>
                    {/* Sử dụng biến randomCoupleImg để hiển thị ảnh ngẫu nhiên */}
                    <img className={cx('couple-img')} src={randomCoupleImg} alt="Anh Khương & Thu Huế" />
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
