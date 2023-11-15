import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import NoMatch from './NoMatch';
import AppBanner from '../appBanner/AppBanner';
import './singleComicPage.scss';

const SingleComicPage = () => {
    const { comicId } = useParams();
    const [comic, setComic] = useState(null);
    const { getComic, clearError, process, setProcess } = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId]);

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
            .then(() => {
                setProcess('confirmed');
            });
    };

    const onComicLoaded = (comic) => {
        setComic(comic);
    };

    const setContent = (process, comic) => {
        switch (process) {
            case 'waiting':
                return <Spinner />;
            case 'loading':
                return <Spinner />;
            case 'confirmed':
                return <View comic={comic} />;
            case 'error':
                return <NoMatch />;
            default:
                throw new Error('Unexpected error has occured.');
        }
    };

    return (
        <>
            <AppBanner />
            {setContent(process, comic)}
        </>
    );
};

const View = ({ comic }) => {
    const { title, description, pageCount, thumbnail, language, price } = comic;

    return (
        <>
            <Helmet>
                <meta name="description" content={`${title} comic`} />
                <title>{title}</title>
            </Helmet>
            <div className="single-comic">
                <img src={thumbnail} alt={title} className="single-comic__img" />
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pageCount}</p>
                    <p className="single-comic__descr">Language: {language}</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to="/comics" className="single-comic__back">
                    Back to all
                </Link>
            </div>
        </>
    );
};

export default SingleComicPage;
