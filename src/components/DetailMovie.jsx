import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

const DetailMovie = (props) => {

    const [detailMovie, setDetailMovie] = useState(null);

    let params = useParams();

    const getMovieDetail = () => {
        console.log('récupérer le film')
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    return (
        <div>
            {detailMovie == null ?
                <Spin />
            :
                <div>
                    Détail film
                </div>
            }
        </div>
    );
};

export default DetailMovie;