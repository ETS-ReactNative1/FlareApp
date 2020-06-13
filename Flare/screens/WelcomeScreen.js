import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function WelcomeScreen(props) {

    const { navigation } = props

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/onboarding-bg.png')} style={styles.container} />
            <StatusBar barStyle={"light-content"} />
            <View style={StyleSheet.absoluteFill}>
                <Svg height="812" width="375">
                    <Circle cx="287" cy="293" r="5" fill="#ef473a" fillOpacity="0.25" />
                    <Circle cx="272" cy="278" r="10" fill="#ef473a" fillOpacity="0.25" />
                    <Circle cx="279.5" cy="285.5" r="17.5" fill="#ef473a" fillOpacity='0.25' />
                    <Circle cx="252" cy="258" r="10" fill="#ef473a" fillOpacity='0.25' />
                    <Circle cx="237" cy="243" r="10" fill="#ef473a" fillOpacity='0.25' />
                    <Circle cx="232" cy="238" r="10" fill="#ef473a" fillOpacity='0.25' />
                    <Circle cx="222" cy="228" r="10" fill="#ef473a" fillOpacity='0.25' />
                    <Circle cx="212" cy="218" r="10" fill="#ef473a" fillOpacity='0.25' />
                    <Circle cx="137" cy="143" r="75" fill="transparent" stroke="#ef473a" strokeWidth="1" strokeOpacity='0.25' />
                </Svg>
            </View>
            <Text style={styles.weHaveText}>WE HAVE
                TO MAKE
                SURE
                YOU'RE
                HUMAN.
            </Text>
            <TouchableOpacity 
                style={styles.signUpRectangle} 
                onPress={() => navigation.navigate('SignUpBirthdayScreen')}>
                <Text style={styles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.line24}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line25}></View>
            <Text style={styles.alreadyHaveText}>ALREADY HAVE AN ACCOUNT?</Text>
            <TouchableOpacity 
                style={styles.loginRectangle} 
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 812
    },

    weHaveText: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 67,
        fontWeight: '700',
        letterSpacing: 4.69,
        lineHeight: 96,
    },

    signUpRectangle: {
        position: 'absolute',
        top: 592,
        left: 38,
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
        letterSpacing: 1.19,
    },

    line24: {
        position: 'absolute',
        top: 682,
        left: 38,
        width: 125,
        height: 1,
        borderColor: '#ffd6bf',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    orText: {
        position: 'absolute',
        top: 670,
        left: 175,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 1.19,
    },

    line25: {
        position: 'absolute',
        top: 682,
        left: 213,
        width: 126,
        height: 1,
        borderColor: '#ffd6bf',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    alreadyHaveText: {
        position: 'absolute',
        top: 696,
        left: 63,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1.05,
    },

    loginRectangle: {
        position: 'absolute',
        top: 722,
        left: 38,
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
        letterSpacing: 1.19,
    },
});