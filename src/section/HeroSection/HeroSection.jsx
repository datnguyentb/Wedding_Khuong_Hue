import classNames from 'classnames/bind';
import styles from './HeroSection.module.scss';

// ✅ Import ảnh
import coupleImg from '../../assets/images/couple_img.png';
import doubleHappinessImg from '../../assets/images/囍.png';
import couple from './../../assets/images/couple.jpg';

const cx = classNames.bind(styles);

function HeroSection() {
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
                    {/* ✅ Chữ Hỷ đặt trước ảnh để nằm ở lớp nền phía sau */}
                    <div className={cx('double-happiness')}>
                        <img src={doubleHappinessImg} alt="Chữ Hỷ đôi" />
                    </div>
                    <img className={cx('couple-img')} src={couple} alt="Anh Khương & Thu Huế" />
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
