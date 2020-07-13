import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Home from '../pages/app/Path';
import Goals from '../pages/app/Goals';
import Achievements from '../pages/app/Achievements';
import Lectures from '../pages/app/Lectures';
import Profile from '../pages/app/Profile';

const AppBottomTabs = createBottomTabNavigator();
const FirstAccessStack = createStackNavigator();
const ROUTE_NAMES = {
	home: 'Jornada',
	goals: 'Metas',
	achievements: 'Conquistas',
	lectures: 'Aulas',
	profile: 'Perfil',
};

const iconDictionary = {
	Jornada: 'map-signs',
	Metas: 'bullseye',
	Conquistas: 'trophy',
	Aulas: 'graduation-cap',
	Perfil: 'user-circle',
};

const AppRoutes = () => {
	return (
		<AppBottomTabs.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
                    let component;
                    component = (<FontAwesome5 name={iconDictionary[route.name]} size={size} color={color} />)
                    return component
                },
			})}
			tabBarOptions={{
				activeTintColor: '#16B4A1',
                inactiveTintColor: '#AFAEAE',
                style: {
                    height: '11%'
                }
			}}
		>
			<AppBottomTabs.Screen name={ROUTE_NAMES.home} component={Home} />
			<AppBottomTabs.Screen name={ROUTE_NAMES.goals} component={Goals} />
			<AppBottomTabs.Screen
				name={ROUTE_NAMES.achievements}
				component={Achievements}
			/>
			<AppBottomTabs.Screen
				name={ROUTE_NAMES.lectures}
				component={Lectures}
			/>
			<AppBottomTabs.Screen
				name={ROUTE_NAMES.profile}
				component={Profile}
			/>
		</AppBottomTabs.Navigator>
	);
};

export default AppRoutes;
