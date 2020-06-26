import React from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from '@react-native-community/datetimepicker';

export default function SignUpBirthdayScreen(props) {
    const { navigation } = props;
    const onChange = (event, date) => {};

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

                <Text style={styles.bdayText}>WHEN'S{'\n'}YOUR BIRTHDAY?</Text>
                <Text style={styles.anonText}>YOUR BIRTHDAY WILL REMAIN{'\n'}ANONYMOUS.</Text>

                <View style={styles.rectangle}>
                    <View style={styles.calendarIcon}>
                        <FontAwesome5 name={'calendar-alt'} size={17} color='#707070' solid />
                    </View>
                    <DatePicker
                        style={styles.birthdayInputContainer}
                        value={new Date()}
                        display='default'
                        onChange={onChange}
                    />
                </View>

                <TouchableOpacity style={styles.cancelRectangle} onPress={() => navigation.navigate('WelcomeScreen')}>
                    <Text style={styles.cancelText}>CANCEL</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SignUpPhoneScreen')}>
                    <FontAwesome5 name={'arrow-circle-right'} size={60} color='#ef473a' solid />
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
    
    bdayText: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 48,
        fontWeight: '700',
        letterSpacing: 4,
        lineHeight: 60,
    },

    anonText: {
        position: 'absolute',
        top: 230,
        left: 20,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1.2,
        lineHeight: 25,
    },

    rectangle: {
        position: 'absolute',
        top: 355,
        alignSelf: 'center',
        width: 335,
        height: 140,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        opacity: 0.9,
    },

    calendarIcon: {
        position: 'absolute',
        top: 60,
        left: 17,
        width: 22,
        height: 22,
    },

    birthdayInputContainer: {
        position: 'absolute',
        top: 10,
        left: 40,
        width: 276,
        height: 120,
    },

    cancelRectangle: {
		position: 'absolute',
        bottom: 40,
		left: 40,
		width: 125,
		height: 50,
		borderRadius: 25,
		borderColor: '#ef473a',
		borderStyle: 'solid',
		borderWidth: 4,
		backgroundColor: '#ffffff',
		alignItems: 'center',
        justifyContent: 'center',
	},

	cancelText: {
		color: '#ef473a',
		fontFamily: 'Poppins-Bold',
		fontSize: 17,
		fontWeight: '700',
		letterSpacing: 1.2,
    },
    
    continueButton: {
        position: 'absolute',
        bottom: 29,
        right: 40,
    },
});