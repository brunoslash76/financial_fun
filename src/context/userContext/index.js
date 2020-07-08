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
function userReducer(state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            break;
        case LOGIN_REQUEST:
            break;
        case LOGIN_FAILURE:
            break;
    }
}

function UserProvider({children}) {
    const [state, dispatch] = React.useReducer(
        userReducer, 
        {
            email: '', 
            fullName: '',
            city: '',
            age: ''
        });
    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

function useUserState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    return context;
}

function useUserDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}

export {UserProvider, useUserState, useUserDispatch}