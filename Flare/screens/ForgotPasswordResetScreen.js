import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ForgotPasswordResetScreen(props) {
    const { navigation } = props;
    const [password, setPassword] = React.useState('');
    const [confirmed_password, confirmPassword] = React.useState('');

    return (
        <ImageBackground source={require('../assets/images/onboarding-bg.png')} style={styles.background}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

                    <Text style={styles.resetText}>RESET{'\n'}YOUR PASSWORD</Text>

                    <View style={styles.rectangle}>
                        <View style={styles.passwordIcon}>
                            <FontAwesome5 name={'lock'} size={17} color='#707070' solid />
                        </View>
                        <TextInput
                            style={styles.passwordInputContainer}
                            placeholder='New password' 
                            placeholderTextColor='#707070'
                            onChange={text => setPassword(text)}
                            value={password}
                            autoCapitalize='none'
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            keyboardAppearance='dark'
                            keyboardType='ascii-capable'
                            returnKeyType='next'
                            textContentType='password'
                            selectionColor='#ef473a'
                            secureTextEntry={true}
                            clearButtonMode='while-editing'
                            clearTextOnFocus={true}
                        />
                        <View style={styles.passwordUnderline} />

                        <View style={styles.confirmPasswordIcon}>
                            <FontAwesome5 name={'lock'} size={17} color='#707070' solid />
                        </View>
                        <TextInput
                            style={styles.confirmPasswordInputContainer}
                            placeholder='Confirm password' 
                            placeholderTextColor='#707070' 
                            onChange={text => confirmPassword(text)}
                            value={confirmed_password}
                            autoCapitalize='none'
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            keyboardAppearance='dark'
                            keyboardType='ascii-capable'
                            returnKeyType='go'
                            textContentType='password'
                            selectionColor='#ef473a'
                            secureTextEntry={true}
                            clearButtonMode='while-editing'
                            clearTextOnFocus={true}
                        />
                        <View style={styles.confirmPasswordUnderline} />
                    </View>

                    <TouchableOpacity style={styles.backRectangle} onPress={() => navigation.navigate('ForgotPasswordTFAScreen')}>
                        <Text style={styles.backText}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resetRectangle} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.resetButtonText}>RESET</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
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

    resetText: {
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

    rectangle: {
        position: 'absolute',
        top: 300,
        alignSelf: 'center',
        width: 335,
        height: 120,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        opacity: 0.9,
    },

    passwordIcon: {
        position: 'absolute',
        top: 20,
        left: 18,
        width: 18,
        height: 20,
    },

    passwordInputContainer: {
        position: 'absolute',
        top: 15,
        left: 40,
        width: 278,
        height: 30,
        fontFamily: 'SFProText-Regular',
        fontSize: 17,
        fontWeight: '400',
    },

    passwordUnderline: {
        position: 'absolute',
        top: 44,
        left: 40,
        width: 278,
        height: 1,
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        opacity: 0.5
    },

    confirmPasswordIcon: {
        position: 'absolute',
        top: 80,
        left: 18,
        width: 18,
        height: 20,
    },

    confirmPasswordInputContainer: {
        position: 'absolute',
        top: 75,
        left: 40,
        width: 278,
        height: 30,
        fontFamily: 'SFProText-Regular',
        fontSize: 17,
        fontWeight: '400',
    },

    confirmPasswordUnderline: {
        position: 'absolute',
        top: 104,
        left: 40,
        width: 278,
        height: 1,
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        opacity: 0.5
    },

    backRectangle: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        width: 125,
        height: 50,
        borderColor: '#ef473a',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backText: {
		color: '#ef473a',
		fontFamily: 'Poppins-Bold',
		fontSize: 17,
		fontWeight: '700',
		letterSpacing: 1.2,
    },

    resetRectangle: {
		position: 'absolute',
		bottom: 40,
		right: 20,
		width: 200,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#ef473a',
		alignItems: 'center',
		justifyContent: 'center'
    },

    resetButtonText: {
		color: '#ffffff',
		fontFamily: 'Poppins-Bold',
		fontSize: 17,
		fontWeight: '700',
		letterSpacing: 1.2,
    },
});