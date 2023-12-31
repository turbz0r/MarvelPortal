import page404 from '../../resources/img/page404.png';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NoMatch = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Error 404" />
                <title>Page not found</title>
            </Helmet>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2em',
                    marginTop: '2em',
                }}>
                <img src={page404} alt="Avengers" style={{ maxWidth: '400px', display: 'block', margin: 'auto' }} />
                <h1>Page not found</h1>
                <NavLink to="/" style={{ color: '#9f0013' }}>
                    Back to MainPage
                </NavLink>
            </div>
        </>
    );
};

export default NoMatch;
