import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import BottomTabNavigator from '../navigation/BottomTabNavigator';
import LinkingConfiguration from '../navigation/LinkingConfiguration';

// SCREENS
import Splash from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
	// Sign Up Screens
import SignUpBirthdayScreen from './SignUpBirthdayScreen';
import SignUpPhoneScreen from './SignUpPhoneScreen';
import SignUpTFAScreen from './SignUpTFAScreen';
import SignUpUsernameScreen from './SignUpUsernameScreen';
	// Onboarding Screens
import OnboardingScreen from './OnboardingScreen';
	// Login / Forgot Password Screens
import LoginScreen from './LoginScreen';
import ForgotPasswordPhoneScreen from './ForgotPasswordPhoneScreen';
import ForgotPasswordTFAScreen from './ForgotPasswordTFAScreen';
import ForgotPasswordResetScreen from './ForgotPasswordResetScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer linking={LinkingConfiguration}>
			{Platform.OS === 'ios'}
			<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Splash'
			>
				<Stack.Screen name='Splash' component={Splash} />
				<Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />

				<Stack.Screen name='SignUpBirthdayScreen' component={SignUpBirthdayScreen} />
				<Stack.Screen name='SignUpPhoneScreen' component={SignUpPhoneScreen} />
				<Stack.Screen name='SignUpTFAScreen' component={SignUpTFAScreen} />
				<Stack.Screen name='SignUpUsernameScreen' component={SignUpUsernameScreen} />

				<Stack.Screen name='LoginScreen' component={LoginScreen} />
				<Stack.Screen name='ForgotPasswordPhoneScreen' component={ForgotPasswordPhoneScreen} />
				<Stack.Screen name='ForgotPasswordTFAScreen' component={ForgotPasswordTFAScreen} />
				<Stack.Screen name='ForgotPasswordResetScreen' component={ForgotPasswordResetScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

//<Stack.Screen name='Root' component={BottomTabNavigator} />

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

