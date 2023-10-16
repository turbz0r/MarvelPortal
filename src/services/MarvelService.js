class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=6a2d2aeaa98f89329c989915e355dcb5';
    _apiKey2 = 'apikey=79cae34e03476628147b9cbd9670c345';
    _baseOffset = 300;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. \n Status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey2}`);
        return res.data.results.map(this._transformCharacter);
    };
    getCharacter = async (id) => {
        let res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey2}`);
        return this._transformCharacter(res.data.results[0]);
    };

    _transformCharacter = (character) => {
        let charDesc;
        if (character.description.length < 2) {
            charDesc = 'Description unavailable.';
        } else if (character.description.length > 35) {
            charDesc = character.description.slice(0, 148) + '...';
        }

        return {
            id: character.id,
            name: character.name,
            description: charDesc,
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items.slice(0, 9),
        };
    };
}

export default MarvelService;
