import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const { process, setProcess, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId]);

    const updateChar = () => {
        const { charId } = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const setContent = (process, char) => {
        switch (process) {
            case 'waiting':
                return <Skeleton />;
            case 'loading':
                return <Spinner />;
            case 'confirmed':
                return <View char={char} />;
            case 'error':
                return <ErrorMessage />;
            default:
                throw new Error('Unexpected error has occured.');
        }
    };

    return <div className="char__info">{setContent(process, char)}</div>;
};

const View = ({ char }) => {
    const { name, description, thumbnail, wiki, homepage, comics } = char;

    let imgStyle = { objectFit: 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { objectFit: 'contain' };
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length < 1 ? 'There are no comics available for this character.' : null}
                {comics.map((item, index) => {
                    return (
                        <li key={index} className="char__comics-item">
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

CharInfo.propTypes = {
    charId: PropTypes.number,
};

export default CharInfo;
