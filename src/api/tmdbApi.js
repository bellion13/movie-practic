import axiosClient from "./apiClient";


export const category = {
  movie : 'movie',
    tv : 'tv',
    anime: 'anime'
}
export const movieType = {
    upcoming:'upcoming',
    popular:'popular',
    top_rated:'top_rated'
}
export const tvType = {
    on_the_air: 'on_the_air',
    popular:'popular',
    top_rated:'top_rated'
}
export const animeType = {
    trending: 'trending',
    top_rated: 'top_rated'
  };
const tmdbApi = {
    getMoviesList: (type,params) => {
        // const url = `/movie/${type}`;
        const url = 'movie/' + movieType[type] ;
        return axiosClient.get(url,{params});
    },
    getTvList: (type,params) => {
        const url = 'tv/' + tvType[type] ;
        return axiosClient.get(url,{params});
    },

    getVideos: (cate , id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url,{params:{}});
    },
    getSearch: (cate,params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url,params);
    },
    getDetail: (cate,id,params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url,params);
    },
    credits: (cate,id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url,{params:{}});
    },
    similar: (cate,id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url,{params:{}});
    },
    
}

export default tmdbApi;
