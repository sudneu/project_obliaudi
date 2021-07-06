import {Route, Redirect} from 'react-router';

import {fakeAuth} from './routes';

export default function PrivateRoute({children, ...rest}) {
    console.log({children, ...rest});

    return (
        <Route {...rest} render={({location}) => {
            return fakeAuth.isAuthenticated === true
                ? children
                : <Redirect to={{
                        pathname: '/login',
                        state: {from : location}
                }} 
                />
        }} />
    )
}