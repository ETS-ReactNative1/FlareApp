import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Auth } from 'aws-amplify';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-community/async-storage';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
    .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
    .catch(console.warn); // it's good to explicitly catch and inspect any error

export default class App extends React.Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        // Hides native splash screen after 2s
        setTimeout(async () => {
            await navigate('WelcomeScreen');
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>SplashScreen Demo! 👋</Text>
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
        color: 'white',
        fontWeight: 'bold',
    },
});

/*     const useEffect = () => {
        setLoading(true);
        const key = async () => {
            try {
                const credentials = await Keychain.getInternetCredentials('auth');

                if (credentials) {
                    const { username, password } = credentials;
                    const user = await Auth.signIn(username, password);
                    setLoading(false);
                    user && onScreen('USER', navigation)();
                }
                else {
                    setLoading(false);
                }
            } catch (err) {
                console.log('error', err);
                setLoading(false);
            }
        }
        key();
    } */