import { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemsLoading: false,
        offset: 300,
        charEnded: false,
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.getCharList();
    }

    getCharList = () => {
        this.onRequest();
    };

    onCharListLoading = () => {
        this.setState({ newItemsLoading: true });
    };

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset).then(this.onCharListLoaded);
    };

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        this.setState(({ offset, charList }) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            error: false,
            newItemsLoading: false,
            offset: offset + 9,
            charEnded: ended,
        }));
    };

    render() {
        const { charList, newItemsLoading, offset, charEnded } = this.state;
        const output = charList.map((item) => {
            const { name, thumbnail, id } = item;
            let imgStyle = { objectFit: 'cover' };
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { objectFit: 'contain' };
            }
            return (
                <li
                    className="char__item"
                    key={id}
                    onClick={() => {
                        this.props.onCharSelected(id);
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
                        this.onRequest(offset);
                    }}>
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func,
};

export default CharList;
