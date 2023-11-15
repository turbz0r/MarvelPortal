import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/errorMessage';

import './charSearchForm.scss';

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const { getCharacterByName, clearError, loading, error } = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
        console.log(char);
    };

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name).then(onCharLoaded);
    };

    const errorMessage = error ? (
        <div className="char__search-critical-error">
            <ErrorMessage />
        </div>
    ) : null;
    const results = !char ? null : char.length > 0 ? (
        <div className="char__search-wrapper">
            <div className="char__search-success">There is! Visit {char[0].name} page?</div>
            <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div>
    ) : (
        <div className="char__search-error">The character was not found. Check the name and try again</div>
    );

    return (
        <div className="char__search-form">
            <Formik
                initialValues={{ name: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Enter character name'),
                })}
                onSubmit={({ name }) => {
                    updateChar(name);
                }}>
                <Form>
                    <label className="char__search-label" htmlFor="name">
                        Search for character by name:
                    </label>
                    <div className="char__search-wrapper">
                        <Field id="name" name="name" type="text" placeholder="Enter character name" />
                        <button type="submit" className="button button__main" disabled={loading}>
                            <div className="inner">Search</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="char__search-error" name="name" />
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    );
};

export default CharSearchForm;
