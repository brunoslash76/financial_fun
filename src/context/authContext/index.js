import React from 'react';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

AuthStateContext.displayName = 'AuthStateContext';
AuthDispatchContext.displayName = 'AuthDispatchContext';


// TODO: Implement function to each action
function authReducer(state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            break;
        case LOGIN_REQUEST:
            break;
        case LOGIN_FAILURE:
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