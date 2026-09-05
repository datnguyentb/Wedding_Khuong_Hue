import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './WishSection.module.scss';

const cx = classNames.bind(styles);

const APPSCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyQnT509pyhRqvmaxHgVEwQRFObpTtVISKENtg1R-oZRQVsK5C6P-pEGEBO0INogoPx/exec';

const SCROLL_SPEED = 0.3; // Tốc độ cuộn

const RANDOM_WISHES = [
    'Chúc hai bạn trăm năm hạnh phúc, cuộc sống mới ngập tràn tiếng cười và niềm vui! 🥂',
    'Thuyền đã cập bến, chúc hai vợ chồng có một hành trình mới thật bình an và viên mãn! ⚓️❤️',
    'Chúc tình yêu của hai bạn luôn bền chặt theo năm tháng, cùng nhau nắm tay đi đến cuối con đường. 🌸',
    'Hạnh phúc đơn giản là tìm được đúng người. Chúc hai bạn mãi giữ được ngọn lửa tình yêu như ngày đầu! 🔥',
    'Chúc gia đình nhỏ của hai bạn luôn tràn đầy yêu thương, hạnh phúc và tài lộc đong đầy! 💰✨',
    'Chúc mừng ngày trọng đại! Mong rằng mỗi ngày trôi qua với hai bạn đều là một ngày tuyệt vời. 🌟',
    'Đồng hành cùng nhau qua bao thử thách, cuối cùng cũng đến ngày hạnh phúc này. Chúc hai bạn mãi hạnh phúc! 💍',
    'Chúc hai bạn một đời an yên, thương lượng và nhường nhịn nhau để xây dựng tổ ấm vững chắc. 🏡',
    'Nguyện xin chúa/phật ban phước lành cho tình yêu và cuộc hôn nhân của hai bạn luôn ngập tràn ánh sáng. ✨',
    'Chúc cô dâu chú rể luôn trẻ trung, yêu đời và mãi ngọt ngào như những ngày mới yêu! 🥰',
    'Mỗi khoảnh khắc bên nhau đều là món quà quý giá. Chúc hai bạn có một đời an khang thịnh vượng bên nhau. 🎁',
    'Chúc cho tình yêu của hai bạn sẽ là nguồn cảm hứng cho tất cả mọi người xung quanh! 💖',
    'Trăm năm tình viên mãn, bạc đầu nghĩa phu thê. Chúc mừng hạnh phúc hai bạn! 🕊️',
    'Chúc tổ ấm mới của hai bạn lúc nào cũng rộn rã tiếng cười và ngập tràn hương vị ngọt ngào của tình yêu. 🌷',
    'Mong rằng những bước đường tiếp theo của hai bạn sẽ luôn có nhau che chở, đồng cam cộng khổ. 🤝',
    'Chúc mừng hai bạn đã chính thức bước sang chương mới của cuộc đời với thật nhiều điều tốt đẹp! 📖✨',
    'Yêu là cùng nhau nhìn về một hướng. Chúc hai bạn luôn chung sức chung lòng vun đắp tương lai. 🌅',
    'Chúc hai bạn sức khỏe dồi dào, sự nghiệp thăng tiến và tình yêu thì ngày càng thắm thiết! 🥂',
    'Một cái kết viên mãn cho mối tình đẹp. Chúc hai bạn sớm có thêm thành viên mới đầy kháu khỉnh nhé! 👶❤️',
    'Chúc mừng ngày hạnh phúc nhất. Mong hai bạn mãi giữ được sự bao dung và thấu hiểu dành cho nhau. 💫',
];

export const WishSection = () => {
    const [wishes, setWishes] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const wishScrollRef = useRef(null);
    const scrollPosRef = useRef(0);
    const animFrameRef = useRef(null);

    // === 1. Tải danh sách lời chúc từ Google Sheets ===
    const loadWishes = async () => {
        try {
            const res = await fetch(`${APPSCRIPT_URL}?t=${Date.now()}`);
            const result = await res.json();

            if (result.success && result.data && result.data.length > 0) {
                setWishes((prevWishes) => {
                    // Lọc bỏ các item đã tồn tại để tránh trùng lặp/tăng ảo
                    const existingKeys = new Set(prevWishes.map((w) => `${w.time}_${w.name}_${w.message}`));
                    const newItems = result.data.filter(
                        (item) => !existingKeys.has(`${item.time}_${item.name}_${item.message}`),
                    );

                    if (newItems.length === 0 && prevWishes.length > 0) return prevWishes;

                    // Kết hợp dữ liệu mới và cũ, giới hạn tối đa 30 item
                    const updatedList = [...newItems, ...prevWishes];
                    return updatedList.slice(0, 30);
                });
            }
        } catch (err) {
            console.error('Lỗi tải lời chúc:', err);
        }
    };

    // === 2. Hiệu ứng cuộn mượt (Chỉ chạy khi có từ 10 lời chúc trở lên) ===
    useEffect(() => {
        if (wishes.length < 10) {
            if (wishScrollRef.current) {
                wishScrollRef.current.style.transform = 'translateY(0px)';
            }
            return;
        }

        let lastTime = performance.now();

        const step = (now) => {
            const delta = now - lastTime;
            lastTime = now;

            if (wishScrollRef.current && wishScrollRef.current.children.length > 0) {
                const totalHeight = wishScrollRef.current.scrollHeight / 2;

                if (totalHeight > 50) {
                    scrollPosRef.current += SCROLL_SPEED * (delta / 16);

                    if (scrollPosRef.current >= totalHeight) {
                        scrollPosRef.current = 0;
                    }

                    wishScrollRef.current.style.transform = `translateY(-${scrollPosRef.current}px)`;
                }
            }
            animFrameRef.current = requestAnimationFrame(step);
        };

        animFrameRef.current = requestAnimationFrame(step);

        return () => {
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
        };
    }, [wishes.length]);

    // === 3. Khởi chạy khi component mounted ===
    useEffect(() => {
        loadWishes();
        const interval = setInterval(loadWishes, 30000);
        return () => clearInterval(interval);
    }, []);

    // Gợi ý nhanh
    const handleQuickSuggest = (text) => {
        setMessage(text);
    };

    // Lời chúc ngẫu nhiên
    const handleRandomSuggest = () => {
        const randomIndex = Math.floor(Math.random() * RANDOM_WISHES.length);
        setMessage(RANDOM_WISHES[randomIndex]);
    };

    // Gửi lời chúc mới
    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedMsg = message.trim();

        if (!trimmedName || !trimmedMsg) {
            alert('⚠️ Vui lòng nhập Tên và Lời chúc!');
            return;
        }

        if (isSubmitting) return;

        setIsSubmitting(true);

        // Hiển thị tạm thời ngay lập tức lên UI
        const tempTime = new Date().toLocaleString('vi-VN', { hour12: false });
        const newWish = { time: tempTime, name: trimmedName, message: trimmedMsg };

        setWishes((prev) => [newWish, ...prev].slice(0, 30));
        setName('');
        setMessage('');

        // Gửi ngầm lên Google AppScript
        try {
            const formData = new URLSearchParams();
            formData.append('name', trimmedName);
            formData.append('message', trimmedMsg);

            await fetch(APPSCRIPT_URL, {
                method: 'POST',
                body: formData,
            });

            setTimeout(loadWishes, 1000);
            setShowSuccessModal(true);
        } catch (err) {
            alert('❌ Lỗi gửi lời chúc: ' + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Chỉ nhân bản danh sách để cuộn vòng tròn khi có từ 10 lời chúc trở lên
    const displayWishes = wishes.length >= 10 ? [...wishes, ...wishes] : wishes;

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
                        <button
                            type="button"
                            className={cx('suggest-btn', 'suggest-btn-random')}
                            onClick={handleRandomSuggest}
                        >
                            🎲 Lời chúc ngẫu nhiên
                        </button>
                    </div>
                </div>

                <button type="submit" className={cx('submit-btn')} disabled={isSubmitting}>
                    {isSubmitting ? '⏳ Đang gửi...' : '💝 Gửi Lời Chúc'}
                </button>
            </form>

            {/* KHU VỰC HIỂN THỊ DANH SÁCH LỜI CHÚC */}
            <div className={cx('wish-display-box')}>
                <h3 className={cx('list-title')}>Lời chúc từ người thương ({wishes.length})</h3>
                <div className={cx('wish-scroll-wrap-vertical')}>
                    <div className={cx('wish-list')} ref={wishScrollRef}>
                        {wishes.length > 0 ? (
                            displayWishes.map((item, index) => (
                                <div key={index} className={cx('wish-card')}>
                                    <div className={cx('wish-author')}>
                                        <span className={cx('avatar-icon')}>✨</span>
                                        <strong className={cx('author-name')}>{item.name}</strong>
                                    </div>
                                    <p className={cx('wish-text')}>{item.message}</p>
                                </div>
                            ))
                        ) : (
                            <div className={cx('wish-card')}>
                                <p className={cx('wish-text')}>Chưa có lời chúc nào, bạn hãy là người đầu tiên! ❤️</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* POP-UP THÔNG BÁO THÀNH CÔNG */}
            {showSuccessModal && (
                <div className={cx('modal-overlay')} onClick={() => setShowSuccessModal(false)}>
                    <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                        <div className={cx('modal-icon')}>💌</div>
                        <h3>Gửi Lời Chúc Thành Công!</h3>
                        <p>Cảm ơn lời chúc ngọt ngào của bạn dành cho chúng mình ❤️</p>
                        <button className={cx('modal-close-btn')} onClick={() => setShowSuccessModal(false)}>
                            Đóng lại
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
