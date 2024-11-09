import React from 'react';
import { Link } from "react-router-dom";
import { OutlineButton } from '../../component/button/Button';
import HeroSlide from '../../component/heroslide/HeroSlide';
import MovieList from '../../component/movie-list/MovieList';
import { category, movieType, tvType } from '../../api/tmdbApi';
const Home = () => {
  return (
    <div className="hero-slide">
      <HeroSlide />
      <div className="container">
      {/* trending Movies */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">
                View More
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        {/* Top Rated Movies */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">
                View More
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        {/* Trending TV */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">
                View More
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        {/* Top Rate TV */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rate TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">
                View More
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

      </div>
    </div>
  )
}

export default Home