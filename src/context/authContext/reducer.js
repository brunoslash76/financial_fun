import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './constants';


async function authReducer(state, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            console.tron.log('AUTH REDUCER ', LOGIN_SUCCESS)
            console.tron.log('PAYLOAD', action.payload)
            console.tron.log('STATE', {...state, user: action.payload})
            return {
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case LOGIN_FAILURE:
            console.tron.log(LOGIN_FAILURE)
            return {
                user: {},
                error: action.payload,
                isAuthenticated: false,
            };

        default: 
            return { ...state }
    }
}

export default authReducer;