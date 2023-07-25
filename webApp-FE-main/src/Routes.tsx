import React from 'react'
import { PrivateRoute } from 'react-auth-kit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Catalogue from './pages/catalogue/Catalogue'
import ErrorPage from "./pages/error/Error";
import Layout from "./shared/Layout";

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path={[ '/', '/home' ]} component={Home} exact/>
                    <Route path={'/register'} component={Register} exact/>
                    <Route path={'/login'} component={Login}/>
                    <PrivateRoute path={'/catalogue'} component={Catalogue} loginPath={'/login'} exact/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes