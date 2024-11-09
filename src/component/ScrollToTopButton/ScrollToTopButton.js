import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Hàm để cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hiệu ứng cuộn mượt
        });
    };

    // Hàm xử lý sự kiện cuộn
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Thêm sự kiện cuộn khi component được gắn vào DOM
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top">↑</button>
            )}
        </>
    );
};

export default ScrollToTopButton;
