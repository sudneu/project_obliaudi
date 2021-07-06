import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>


export const fakeAuth = {
    isAuthenticated : false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100)
    }
}


function Login() {
    const [
        redirectToReferrer,
        setRedirectToReferrer
    ] = React.useState(false);

    const { state } = useLocation();

    const login = () => fakeAuth.authenticate(() => {
        setRedirectToReferrer(true)
    })

    if(redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />
    }
    
    return (
        <div>
            <p>You must log in to view the page</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

function AuthButton () {
    console.log(fakeAuth);
    const history = useHistory();
    return (fakeAuth.isAuthenticated === true
        ? <p>
            Welcome! <button onClick={() => {
                return fakeAuth.signout(() => history.push('/'))
            }}>Signout</button>
            </p>
        : <p>You are not logged in.</p>
    )}

export default function AuthRoute() {
    return (
        <Router>
            <AuthButton />
            <div>
                <ul>
                    <li><Link to="/public">Public</Link></li>
                    <li><Link to="/protected">Protected</Link></li>
                </ul>
                <Switch>
                    <Route path="/public" component={Public} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/protected">
                        {<h3>Protected</h3>}
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}