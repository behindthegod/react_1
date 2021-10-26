import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../../router";
import {AuthContext} from "../../../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route =>
                    <Route component={route.component}
                           path={route.path}yar
                           exact={route.exact}/>
                )}
            </Switch>
            : <Switch>
                {publicRoutes.map(route =>
                    <Route component={route.component}
                           path={route.path}
                           exact={route.exact}/>
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;