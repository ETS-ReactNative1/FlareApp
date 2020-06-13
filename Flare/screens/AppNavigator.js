import * as React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import BottomTabNavigator from '../navigation/BottomTabNavigator';
import LinkingConfiguration from '../navigation/LinkingConfiguration';

import WelcomeScreen from './WelcomeScreen';
//import SignUpBirthday from './SignUpBirthdayScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<View style={styles.container}>
		{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
			<NavigationContainer linking={LinkingConfiguration}>
				<Stack.Navigator
				screenOptions={{
                    headerShown: false,
                }}>
					<Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
					<Stack.Screen name='LoginScreen' component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	)
}

//<Stack.Screen name='Root' component={BottomTabNavigator} />

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

