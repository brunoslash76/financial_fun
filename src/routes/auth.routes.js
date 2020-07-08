import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import arrowLeft from '../../assets/img/arrow-left-header.png';

import SignUp from '../pages/auth/SignUp';
import Profile from '../pages/auth/Profile';
import Login from '../pages/auth/Login';
import Habits from '../pages/auth/Habits';
import AddChildren from '../pages/auth/AddChildren';
import ChildProfile from '../pages/auth/ChildProfile';

const AuthStack = createStackNavigator();
const theme = {
	color: {
		brandPrimary: '#16B4A1',
		white: '#fff',
	},
};

const AuthRoutes = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerTintColor: theme.color.white,
				headerStyle: {
					backgroundColor: theme.color.brandPrimary,
				},
				cardStyle: {
					backgroundColor: theme.color.white,
				},
				headerBackTitle: 'Voltar',
			}}
		>
			<AuthStack.Screen
				name='Login'
				component={Login}
				options={{ headerShown: false }}
			/>

			<AuthStack.Screen
				name='SignUp'
				component={SignUp}
				options={{ headerShown: false }}
			/>
			<AuthStack.Screen
				name='Profile'
				component={Profile}
				options={{
					headerLeft: null,
				}}
			/>
			<AuthStack.Screen name='Habits' component={Habits} />
			<AuthStack.Screen name='AddChildren' component={AddChildren} />
			<AuthStack.Screen name='ChildProfile' component={ChildProfile} />
		</AuthStack.Navigator>
	);
};

export default AuthRoutes;
