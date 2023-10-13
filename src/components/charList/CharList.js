import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.getCharList();
    }

    getCharList = () => {
        this.marvelService.getAllCharacters().then(this.onCharListLoaded);
    };

    onCharListLoaded = (charList) => {
        this.setState({ charList, loading: false, error: false });
    };

    render() {
        const { charList } = this.state;
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
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default CharList;
