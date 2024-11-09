import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import './MovieList.scss'


import { Link } from 'react-router-dom';


import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import MovieCard from '../moviecard/MovieCard';
const MovieList = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let res = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        res = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        res = await tmdbApi.getTvList(props.type, { params });
                }
             } else {
                res = await tmdbApi.similar(props.category, props.id);
            }
            setItems(res.results);
        }
    getList();
 
}, []);

return (
    <div className='movie-list'>
        <Swiper 
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {
                items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <MovieCard item={item} category={props.category} />
                        {/* <img src={apiConfig.w500Image(item.poster_path)} alt="" /> */}
                    </SwiperSlide>
                ))
            }
           
        </Swiper>
    </div>
)
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList