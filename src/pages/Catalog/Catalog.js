import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../component/pageheader/PageHeader';
import {category as cate} from '../../api/tmdbApi';
import MovieGrid from '../../component/moviegrid/MovieGrid';
const Catalog = () => {
  const { category } = useParams();
  // console.log(category);
  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Shows'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}/>
        </div>
      </div>
    </>
  )
}

export default Catalog