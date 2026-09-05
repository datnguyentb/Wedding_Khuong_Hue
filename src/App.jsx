import classNames from 'classnames/bind';
import styles from './App.module.scss';
import {
    HeroSection,
    WeddiingCard,
    VenueSection,
    InvitationSection,
    WeddingEventDetails,
    WeddingCalendar,
    RsvpSection,
    StoryGallerySection,
    WishSection,
    GiftModal,
    ThankYouSection,
} from './section';
import { useState } from 'react';
import BackgroundAudio from './section/backgroundAudio/backgroundAudio';

const cx = classNames.bind(styles);

function App() {
    const [isPlaying, setIsPlaying] = useState('false');
    return (
        <div>
            {/* <WeddiingCard setIsPlaying={setIsPlaying} /> */}
            <div id="container-cover" className={cx('main-content')}>
                <BackgroundAudio isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                <HeroSection />

                <div className={cx('group_1')}>
                    <InvitationSection />

                    <WeddingEventDetails />

                    <WeddingCalendar />
                    <VenueSection />

                    <RsvpSection />
                </div>

                <StoryGallerySection />

                <WishSection />

                <GiftModal />

                <ThankYouSection />
            </div>
        </div>
    );
}

export default App;
