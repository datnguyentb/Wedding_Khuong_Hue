import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WishSection.module.scss';

const cx = classNames.bind(styles);

// Dữ liệu mẫu ban đầu
const INITIAL_WISHES = [
    { id: 1, name: 'Anh Tuấn', message: 'Chúc hai bạn trăm năm hạnh phúc, mãi yêu thương nhau nhé! 💍' },
    { id: 2, name: 'Chị Mai', message: 'Chúc tình yêu của hai em ngày một đong đầy, hạnh phúc viên mãn! 💐' },
    { id: 3, name: 'Minh Hoàng', message: 'Đồng tâm đồng lòng, sớm có baby nha hai bạn! ❤️' },
];

export const WishSection = () => {
    const [wishes, setWishes] = useState(INITIAL_WISHES);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // Bấm gợi ý nhanh
    const handleQuickSuggest = (text) => {
        setMessage(text);
    };

    // Gửi lời chúc mới
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        const newWish = {
            id: Date.now(),
            name: name.trim(),
            message: message.trim(),
        };

        setWishes([newWish, ...wishes]); // Thêm lời chúc mới lên đầu
        setName('');
        setMessage('');
    };

    return (
        <section className={cx('wish-section', 'scroll-reveal')}>
            <h2 className={cx('script-title')}>💌 Gửi Lời Chúc</h2>
            <p className={cx('wish-intro')}>Để lại lời chúc ngọt ngào cho chúng tôi nhé ❤️</p>

            {/* FORM NHẬP LỜI CHÚC */}
            <form className={cx('wish-form')} onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <input
                        type="text"
                        placeholder="Tên của bạn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <textarea
                        placeholder="Viết lời chúc tại đây..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <div className={cx('wish-suggestions')}>
                        <span className={cx('suggest-label')}>💡 Gợi ý nhanh:</span>
                        <button
                            type="button"
                            className={cx('suggest-btn')}
                            onClick={() =>
                                handleQuickSuggest('Chúc hai bạn trăm năm hạnh phúc, mãi yêu thương nhau! 💍')
                            }
                        >
                            Trăm năm hạnh phúc
                        </button>
                        <button
                            type="button"
                            className={cx('suggest-btn')}
                            onClick={() => handleQuickSuggest('Mãi đồng tâm đồng ý, xây dựng tổ ấm thật hạnh phúc! ❤️')}
                        >
                            Đồng tâm đồng lòng
                        </button>
                        <button
                            type="button"
                            className={cx('suggest-btn')}
                            onClick={() =>
                                handleQuickSuggest(
                                    'Chúc tình yêu của hai bạn ngày một đong đầy, hạnh phúc viên mãn! 💐',
                                )
                            }
                        >
                            Tình yêu đong đầy
                        </button>
                    </div>
                </div>

                <button type="submit" className={cx('submit-btn')}>
                    💝 Gửi Lời Chúc
                </button>
            </form>

            {/* KHU VỰC HIỂN THỊ DANH SÁCH LỜI CHÚC */}
            <div className={cx('wish-display-box')}>
                <h3 className={cx('list-title')}>Lời chúc từ người thương ({wishes.length})</h3>
                <div className={cx('wish-scroll-wrap-vertical')}>
                    <div className={cx('wish-list')}>
                        {wishes.map((item) => (
                            <div key={item.id} className={cx('wish-card')}>
                                <div className={cx('wish-author')}>
                                    <span className={cx('avatar-icon')}>✨</span>
                                    <strong className={cx('author-name')}>{item.name}</strong>
                                </div>
                                <p className={cx('wish-text')}>{item.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
