import React from 'react';

import classNames from 'classnames/bind';
import styles from './WeddingCalendar.module.scss';
import Line from '../../components/line/line.jsx';

const cx = classNames.bind(styles);

export const WeddingCalendar = () => {
    return (
        <>
            <section className={cx('calendar-card', 'scroll-reveal')}>
                <div className={cx('calendar-header')}>09.2026</div>
                <div className={cx('calendar-body')}>
                    <div className={cx('bg-year')}>2026</div>
                    <div className={cx('weekdays')}>
                        <span>T2</span>
                        <span>T3</span>
                        <span>T4</span>
                        <span>T5</span>
                        <span>T6</span>
                        <span>T7</span>
                        <span>CN</span>
                    </div>
                    <div className={cx('days-grid')}>
                        <span></span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                        <span>19</span>
                        <span className={cx('wedding-day')}>
                            20 <span className={cx('heart-mark')}>❤️</span>
                        </span>
                        <span>21</span>
                        <span>22</span>
                        <span>23</span>
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                        <span>27</span>
                        <span>28</span>
                        <span>29</span>
                        <span>30</span>
                    </div>
                </div>
            </section>
            <Line type="notch" />
        </>
    );
};
