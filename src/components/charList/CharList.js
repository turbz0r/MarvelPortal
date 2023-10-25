import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(300);
    const [charEnded, setCharEnded] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = (offset) => {
        setNewItemsLoading(true);
        getAllCharacters(offset).then(onCharListLoaded);
    };

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList((charList) => [...charList, ...newCharList]);
        setNewItemsLoading((newItemsLoading) => false);
        setOffset((offset) => offset + 9);
        setCharEnded((charEnded) => ended);
    };

    const output = charList.map((item) => {
        const { name, thumbnail, id } = item;
        let imgStyle = { objectFit: 'cover' };
        if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { objectFit: 'contain' };
        }
        let active = activeId === id;
        let dynamicClass = active ? 'char__item char__item_selected' : 'char__item';
        return (
            <li
                tabIndex="0"
                className={dynamicClass}
                key={id}
                onFocus={() => {
                    props.onCharSelected(id);
                    setActiveId(id);
                }}>
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div className="char__name">{name}</div>
            </li>
        );
    });

    return (
        <div className="char__list">
            <ul className="char__grid">{output}</ul>
            <button
                style={{ display: charEnded ? 'none' : 'block' }}
                className="button button__main button__long"
                disabled={newItemsLoading}
                onClick={() => {
                    onRequest(offset);
                }}>
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

CharList.propTypes = {
    onCharSelected: PropTypes.func,
};

export default CharList;
