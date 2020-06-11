import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
//import LockIcon from './assets/lock.fill.svg';

function Login(props) {

  const { navigation } = props

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.container}></ImageBackground>
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
      <Text style={styles.welcomeBackText}>WELCOME
      BACK.
      </Text>
      <Text style={styles.weveMissedText}>WE'VE MISSED YOU!{"\n"}
      ENTER YOUR USERNAME AND PASSWORD.
      </Text>
      <View style={styles.rectangle}></View>
      
      <Text style={styles.forgotYourText} onPress={() => navigation.navigate('ForgotPasswordPhone')}>FORGOT YOUR PASSWORD?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 812
    },

    welcomeBackText: {
      position: 'absolute',
      top: 40,
      left: 20,
      color: '#ffd6bf',
      fontFamily: 'Poppins-Bold',
      fontSize: 60,
      fontWeight: '700',
      letterSpacing: 4.2,
    },

    weveMissedText: {
      position: 'absolute',
      top: 224,
      left: 20,
      color: '#ffd6bf',
      fontFamily: 'Poppins-Bold',
      fontSize: 15,
      fontWeight: '700',
      letterSpacing: 1.05,
    },

    rectangle: {
      position: 'absolute',
      top: 370,
      left: 20,
      width: 335,
      height: 120,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      opacity: 0.9,
    },

    personIcon: {
      position: 'absolute',
      top: 389,
      left: 38,
      width: 17,
      height: 22,
      color: '#707070',
      fontFamily: 'SF Pro Text',
      fontSize: 17,
      fontWeight: '400',
    },

    forgotYourText: {
      position: 'absolute',
      top: 510,
      left: 74,
      color: '#ffffff',
      fontFamily: 'Poppins-Bold',
      fontSize: 15,
      fontWeight: '700',
      letterSpacing: 1.05,
      lineHeight: 28,
      textDecorationLine: 'underline',
    },
});

export default Login