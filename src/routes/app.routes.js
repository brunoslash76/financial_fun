import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';

const AppBottomTabs = createBottomTabNavigator();
const AppRoutes = () => {

    return (
        <AppBottomTabs.Navigator>
            <AppBottomTabs.Screen
                name="Home"
                component={Home}
            />
        </AppBottomTabs.Navigator>
    )

};

export default AppRoutes;