import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const AuthStack = createStackNavigator();
const AuthRoutes = () => {


    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false, 
                cardStyle: {
                    backgroundColor: 'transparent',
                }
            }}
        >
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
            />
            <AuthStack.Screen
                name="Profile"
                component={Profile}
            />
            <AuthStack.Screen
                name="Login"
                component={Login}
            />
        </AuthStack.Navigator>
    )

};

export default AuthRoutes;