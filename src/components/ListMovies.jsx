import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Axios from 'axios';

const ListMovies = () => {

    const [movies, setMovies] = useState([]);

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => console.log('reponse => ', response))
        // .then(response => setMovies([response.data]))
        .catch(error => console.log('error = ', error))
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {movies.map((movie, index) => 
                <Movie 
                    key={index}
                />
            )}
        </div>
    );
};

export default ListMovies;