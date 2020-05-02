import React from 'react';
import FirebaseService from '../../services/FirebaseService';

import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
} from '../constants';




function authReducer(state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            break;
        case LOGIN_REQUEST:
            FirebaseService.auth()
            break;
        case LOGIN_FAILURE:
            break;
    }
}