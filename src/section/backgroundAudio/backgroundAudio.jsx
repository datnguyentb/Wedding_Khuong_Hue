import { useState, useEffect, useRef } from 'react';
import songs from '../../assets/audio';
import classNames from 'classnames/bind';
import styles from './backgroundAudio.module.scss';

const cx = classNames.bind(styles);
const songList = Object.values(songs);

function BackgroundAudio({ isPlaying, setIsPlaying }) {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * songList.length));

    // Đồng bộ phát / tạm dừng
    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch((err) => {
                console.log('Chờ tương tác người dùng:', err);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, setIsPlaying]);

    // Chuyển bài tự động
    const handleEnded = () => {
        setCurrentIndex((prev) => (prev + 1) % songList.length);
    };

    const handleToggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <button
                className={cx('music-toggle-btn', { playing: isPlaying })}
                onClick={handleToggleMusic}
                title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
            >
                {/* Visualizer sóng âm thanh mượt mà */}
                <div className={cx('equalizer')}>
                    <span className={cx('bar')}></span>
                    <span className={cx('bar')}></span>
                    <span className={cx('bar')}></span>
                </div>
            </button>

            <audio ref={audioRef} src={songList[currentIndex]} preload="auto" onEnded={handleEnded} />
        </>
    );
}

export default BackgroundAudio;
