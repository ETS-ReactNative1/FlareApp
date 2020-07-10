import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';
import MyStorage from '../MyStorage';

/* 
    TODO:
    - Animated splash screen
*/

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
    .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
    .catch(console.warn); // it's good to explicitly catch and inspect any error

export default class SplashScrn extends React.Component {

    async componentDidMount() {
        // Hides native splash screen after 1.7s
        setTimeout(async () => {
            await this.getToken();

            console.log('timeout');
            await this.props.navigation.navigate('WelcomeScreen');
        }, 1700);
    }

    // Checks for user token, if true then navigate to LoginScreen, if false then timeout to Welcome Screen
    getToken = async () => {
        try {
            //let userToken = await AsyncStorage.getItem('userToken');

            if (userToken != null) {
                let data = JSON.parse(userToken);

                await Auth.signIn(data.username, data.password);

                console.log('User successfully remembered.');
                this.props.navigation.navigate('RecentPostScreen');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />

                <LottieView source={require('../../assets/animations/loading.json')} autoPlay/>
                
                <Text style={styles.text}>FLARE</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#30122D',
    },

    text: {
        position: 'absolute',
        alignSelf: 'center',
        color: '#EF473A',
		fontFamily: 'Poppins-Bold',
		fontSize: 36,
		fontWeight: '700',
		letterSpacing: 4,
		lineHeight: 60,
    },
});