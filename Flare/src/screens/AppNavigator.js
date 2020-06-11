import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from './welcome/welcome original';
import SignUpBirthday from './signUpBirthday/signUpBirthday';
import Login from './login/login';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                >
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='SignUpBirthday' component={SignUpBirthday} />
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;