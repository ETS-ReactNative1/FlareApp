import React from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function WelcomeScreen(props) {
    const { navigation } = props;

    return (
        <ImageBackground source={require('../assets/images/onboarding-bg.png')} style={styles.background}>
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <View style={StyleSheet.absoluteFill}>
                    <Svg height='100%' width='100%'>
                        <Circle cx='287' cy='293' r='5' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='272' cy='278' r='10' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='279.5' cy='285.5' r='17.5' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='252' cy='258' r='10' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='237' cy='243' r='10' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='232' cy='238' r='10' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='222' cy='228' r='10' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='212' cy='218' r='10' fill='#ef473a' fillOpacity='0.25' />
                        <Circle cx='137' cy='143' r='75' fill='transparent' stroke='#ef473a' strokeWidth='1' strokeOpacity='0.25' />
                    </Svg>
                </View>

                <Text style={styles.weHaveText}>WE HAVE TO MAKE SURE YOU'RE HUMAN.</Text>

                <TouchableOpacity style={styles.signUpRectangle} onPress={() => navigation.navigate('SignUpBirthdayScreen')}>
                    <Text style={styles.signUpText}>SIGN UP</Text>
                </TouchableOpacity>

                <View style={styles.line1} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line2} />
                <Text style={styles.alreadyHaveText}>ALREADY HAVE AN ACCOUNT?</Text>

                <TouchableOpacity style={styles.loginRectangle} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },

    container: {
        flex: 1,
    },
    
    weHaveText: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 54,
        fontWeight: '700',
        letterSpacing: 5,
        lineHeight: 70,
    },

    signUpRectangle: {
        position: 'absolute',
        bottom: 170,
        alignSelf: 'center',
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef473a',
    },

    signUpText: {
        position: 'absolute',
        color: '#ffffff',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 1.2,
    },

    line1: {
        position: 'absolute',
        bottom: 129.5,
        left: 38.5,
        width: 125,
        height: 1,
        borderColor: '#ffd6bf',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    orText: {
        position: 'absolute',
        bottom: 118,
        alignSelf: 'center',
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 1.2,
    },

    line2: {
        position: 'absolute',
        bottom: 129.5,
        right: 36.5,
        width: 126,
        height: 1,
        borderColor: '#ffd6bf',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    alreadyHaveText: {
        position: 'absolute',
        bottom: 95,
        alignSelf: 'center',
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1.2,
    },

    loginRectangle: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        width: 300,
        height: 50,
        borderColor: '#ef473a',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    loginText: {
        position: 'absolute',
        color: '#ef473a',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 1.2,
    },
});