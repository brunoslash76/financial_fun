import React from 'react';
import FirebaseService from '../../services/FirebaseService';

import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
} from '../constants';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

AuthStateContext.displayName = 'AuthStateContext';
AuthDispatchContext.displayName = 'AuthDispatchContext';


// TODO: Implement function to each action
function authReducer(state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            // redirect to in app
            break;
        case LOGIN_REQUEST:
            // request server for credentials 
            break;
        case LOGIN_FAILURE:
            // redirect back to login form with error message
            break;
    }
}

function AuthProvider({children}) {
    const [state, dispatch] = React.useReducer(authReducer, {email: '', password: ''});
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider')
    }
    return context;
}

function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }
    return context;
}

export {AuthProvider, useAuthState, useAuthDispatch}