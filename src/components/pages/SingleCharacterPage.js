import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import NoMatch from './NoMatch';
import AppBanner from '../appBanner/AppBanner';
import './singleComicPage.scss';

const SingleCharacterPage = () => {
    const { charId } = useParams();
    const [char, setChar] = useState(null);
    const { loading, error, getCharacter, clearError, process, setProcess } = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [charId]);

    const updateChar = () => {
        clearError();
        getCharacter(charId)
            .then(onComicLoaded)
            .then(() => {
                setProcess('confirmed');
            });
    };

    const onComicLoaded = (char) => {
        setChar(char);
    };

    const setContent = (process, char) => {
        switch (process) {
            case 'waiting':
                return <Spinner />;
            case 'loading':
                return <Spinner />;
            case 'confirmed':
                return <View char={char} />;
            case 'error':
                return <NoMatch />;
            default:
                throw new Error('Unexpected error has occured.');
        }
    };

    return (
        <>
            <AppBanner />
            {setContent(process, char)}
        </>
    );
};

const View = ({ char }) => {
    const { name, description, thumbnail } = char;

    return (
        <>
            <Helmet>
                <meta name="description" content={`${name} character page`} />
                <title>{name}</title>
            </Helmet>
            <div className="single-comic">
                <img src={thumbnail} alt={name} className="single-comic__img" />
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{name}</h2>
                    <p className="single-comic__descr">{description}</p>
                </div>
                <Link to="/" className="single-comic__back">
                    Back to all
                </Link>
            </div>
        </>
    );
};

export default SingleCharacterPage;
