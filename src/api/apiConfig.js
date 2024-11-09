
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b0f1cd940e09a9bd8e28154459351c0b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;