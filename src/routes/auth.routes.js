import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
                name="login"
                component={Login}

            />
        </AuthStack.Navigator>
    )

};

export default AuthRoutes;