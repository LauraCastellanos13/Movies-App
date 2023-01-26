import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'ccfe726a6b01bb48492809a324f24f99',
        language: 'en-US'
    }
});

export default movieDB;