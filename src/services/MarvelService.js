import useHttp from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=6a2d2aeaa98f89329c989915e355dcb5';
    const _apiKey2 = 'apikey=79cae34e03476628147b9cbd9670c345';
    const _baseOffset = 300;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey2}`);
        return res.data.results.map(_transformCharacter);
    };

    const getCharacter = async (id) => {
        let res = await request(`${_apiBase}characters/${id}?${_apiKey2}`);
        return _transformCharacter(res.data.results[0]);
    };

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey2}`);
        return _transformCharacter(res.data.results[0]);
    };

    const _transformCharacter = (character) => {
        let charDesc;
        if (character.description.length < 2) {
            charDesc = 'Description unavailable.';
        } else if (character.description.length > 35) {
            charDesc = character.description.slice(0, 210) + '...';
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

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey2}`);
        return res.data.results.map(_transformComics);
    };

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    };

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language: comics.textObjects[0]?.language || 'en-us',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
        };
    };

    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, getCharacterByName };
};

export default useMarvelService;
