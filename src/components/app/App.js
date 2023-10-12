import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        showRandomCharacter: true,
    };

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomCharacter: !state.showRandomCharacter,
            };
        });
    };

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    {this.state.showRandomCharacter ? <RandomChar /> : null}
                    <button onClick={this.toggleRandomChar}>Toggle RandomChar Component</button>
                    <div className="char__content">
                        <CharList />
                        <CharInfo />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        );
    }
}

export default App;
