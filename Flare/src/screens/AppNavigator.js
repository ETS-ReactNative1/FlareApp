import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import BottomTabNavigator from '../navigation/BottomTabNavigator';
import LinkingConfiguration from '../../navigation/LinkingConfiguration';

// SCREENS
import SplashScrn from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
	// Sign Up Screens
import SignUpBirthdayScreen from './SignUpBirthdayScreen';
import SignUpPhoneScreen from './SignUpPhoneScreen';
import SignUpUsernameScreen from './SignUpUsernameScreen';
import SignUpTFAScreen from './SignUpTFAScreen';
	// Login / Forgot Password Screens
import LoginScreen from './LoginScreen';
import ForgotPasswordUsernameScreen from './ForgotPasswordUsernameScreen';
import ForgotPasswordTFAScreen from './ForgotPasswordTFAScreen';
import ForgotPasswordResetScreen from './ForgotPasswordResetScreen';
	// Onboarding Screen
import OnboardingScreen from './OnboardingScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer linking={LinkingConfiguration}>
			{Platform.OS === 'ios'}
			<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='SplashScreen'
			>
				<Stack.Screen name='SplashScreen' component={SplashScrn} />
				<Stack.Screen name='WelcomeScreen' component={WelcomeScreen} 
				options={{
					gestureEnabled: false,
					...TransitionPresets.RevealFromBottomAndroid,
				}}
				/>

				<Stack.Screen name='SignUpBirthdayScreen' component={SignUpBirthdayScreen} />
				<Stack.Screen name='SignUpPhoneScreen' component={SignUpPhoneScreen} />
				<Stack.Screen name='SignUpUsernameScreen' component={SignUpUsernameScreen} />
				<Stack.Screen name='SignUpTFAScreen' component={SignUpTFAScreen} />

				<Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />

				<Stack.Screen name='LoginScreen' component={LoginScreen} />
				<Stack.Screen name='ForgotPasswordUsernameScreen' component={ForgotPasswordUsernameScreen} 
				options={{
					...TransitionPresets.ModalSlideFromBottomIOS,
				}}
				/>
				<Stack.Screen name='ForgotPasswordTFAScreen' component={ForgotPasswordTFAScreen} />
				<Stack.Screen name='ForgotPasswordResetScreen' component={ForgotPasswordResetScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// bottom bar?
//<Stack.Screen name='Root' component={BottomTabNavigator} />

const splashAnimation = {
	animation: 'spring',
	config: {
	  stiffness: 1000,
	  damping: 500,
	  mass: 3,
	  overshootClamping: true,
	  restDisplacementThreshold: 0.01,
	  restSpeedThreshold: 0.01,
	},
};