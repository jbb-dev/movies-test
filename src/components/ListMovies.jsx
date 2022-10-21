import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Axios from 'axios';

const ListMovies = () => {

    const [movies, setMovies] = useState([]);

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    // const URL = `https://api.themoviedb.org/3/movie/?api_key=${API_KEY}`;
    const URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => setMovies(response.data.results))
        .catch(error => console.log('error = ', error))
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {movies.map((mov, index) => 
                <Movie 
                    key={index}
                    img={mov.backdrop_path}
                    title={mov.original_title}
                    descritpion={mov.overview}
                    id={mov.id}
                />
            )}
        </div>
    );
};

export default ListMovies;