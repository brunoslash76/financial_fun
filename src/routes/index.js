import React, { useState, useEffect } from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuthState } from '../context/authContext';

export default Routes = () => {

    const state = useAuthState();
    const [isAuthenticated, setAuthentication] = useState(false)


    useEffect(() => {
        if (state && state._55) {
            setAuthentication(state._55.isAuthenticated)
        } else if (state && state.isAuthenticated) {
            setAuthentication(state.isAuthenticated)
        }
    }, [state])
    return isAuthenticated ? <AppRoutes/> : <AuthRoutes/>;

}
