import React, { useEffect } from 'react';
import authReducer from './reducer'

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

AuthStateContext.displayName = 'AuthStateContext';
AuthDispatchContext.displayName = 'AuthDispatchContext';



function AuthProvider({children}) {

    const initialState =  {
        user: {},
        isAuthenticated: false,
        error: {}
    }

    const [state, dispatch] = React.useReducer(authReducer, initialState);
    console.tron.log(state)
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
    console.tron.log('Essa porra', context)
    if (context === undefined) {
        throw new Error('1 useAuthState must be used within a AuthProvider')
    }
    return context;
}

function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('2 useAuthDispatch must be used within a AuthProvider');
    }
    return context;
}

export {
    AuthProvider,
    useAuthState,
    useAuthDispatch,
}