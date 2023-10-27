import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(300);
    const [newItemsLoading, setNewItemsLoading] = useState(false);

    const { getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = (offset) => {
        setNewItemsLoading(true);
        getAllComics(offset).then(onComicsListLoaded);
    };

    const onComicsListLoaded = (newComics) => {
        setComics((comics) => [...comics, ...newComics]);
        setOffset((offset) => offset + 8);
        setNewItemsLoading(false);
    };

    const output = comics.map((item, index) => {
        const { id, title, price, thumbnail } = item;

        return (
            <li className="comics__item" key={index}>
                <NavLink to={`/comics/${id}`}>
                    <img src={thumbnail} alt={title} className="comics__item-img" />
                    <div className="comics__item-name">{title}</div>
                    <div className="comics__item-price">{price}</div>
                </NavLink>
            </li>
        );
    });

    return (
        <div className="comics__list">
            <ul className="comics__grid">{output}</ul>
            <button
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

export default ComicsList;
