import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from "../modal/Modal";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from '../../api/apiConfig';

import { useHistory } from 'react-router';
import "./HeroSlide.scss";

// Đăng ký module Autoplay
SwiperCore.use([Autoplay]);

const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 20));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        getMovies();
    }, []);

    const handleTrailerClick = (itemId) => {
        const modal = document.querySelector(`#modal_${itemId}`);
        modal.classList.add('active');
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };

    const handleModalClose = () => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem 
                                    item={item} 
                                    className={`${isActive ? 'active' : ''}`} 
                                    onTrailerClick={() => handleTrailerClick(item.id)} 
                                />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movieItems.map((item, i) => (
                    <TrailerModal 
                        key={i} 
                        item={item} 
                        onClose={handleModalClose} 
                    />
                ))
            }
        </div>
    );
}

const HeroSlideItem = ({ item, className, onTrailerClick }) => {
    let history = useHistory();

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`hero-slide__item ${className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton onClick={onTrailerClick}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

const TrailerModal = ({ item, onClose }) => {
    const iframeRef = useRef(null);

    const loadVideo = async () => {
        try {
            const videos = await tmdbApi.getVideos(category.movie, item.id);
            if (videos.results.length > 0) {
                const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
                iframeRef.current.setAttribute('src', videoSrc);
            } else {
                iframeRef.current.parentElement.innerHTML = 'No trailer';
            }
        } catch (error) {
            console.error('Error loading video:', error);
        }
    };

    const handleModalClose = () => {
        iframeRef.current.setAttribute('src', '');
        onClose();
    };

    useEffect(() => {
        loadVideo();
    }, [item.id]);

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={handleModalClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlide;
