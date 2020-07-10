import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';

export default function LoginScreen(props) {
	const { navigation } = props;
	const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    let secondInput = {};
    const [error, setError] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    
    const handleSubmit = async () => {
        if (username.length < 1) {
            setError('PLEASE ENTER YOUR USERNAME.');
            setModalVisible(!modalVisible);
            RenderError();
        }
        else if (password.length < 6) {
            setError('PLEASE ENTER YOUR PASSWORD.');
            setModalVisible(!modalVisible);
            RenderError();
        }
        else {
            try {
                const credentials = { username: username, password: password };
                await Auth.signIn(username, password);
                await AsyncStorage.setItem('userToken', JSON.stringify(credentials));
    
                console.log('User successfully logged in.');
                navigation.navigate('RecentPostScreen');
            } catch (error) {
                if (error.code === 'UserNotConfirmedException') {
                    setError('ACCOUNT NOT VERIFIED YET.');
                    setModalVisible(!modalVisible);
                    RenderError();
                } 
                else if (error.code === 'PasswordResetRequiredException') {
                    setError('EXISTING USER FOUND.\nPLEASE RESET YOUR PASSWORD.');
                    setModalVisible(!modalVisible);
                    RenderError();
                } 
                else if (error.code === 'NotAuthorizedException') {
                    setError('FORGOT YOUR PASSWORD?');
                    setModalVisible(!modalVisible);
                    RenderError();
                } 
                else if (error.code === 'UserNotFoundException') {
                    setError('USER DOES NOT EXIST.');
                    setModalVisible(!modalVisible);
                    RenderError();
                } 
                else {
                    setError('FATAL ERROR\nPLEASE TRY AGAIN LATER.');
                    setModalVisible(!modalVisible);
                    RenderError();
                    console.log('Error:', error);
                }
            }
        }
    }

    function RenderError() {
        return ( 
            <Modal animationType='slide' transparent={true} presentationStyle='overFullScreen' visible={modalVisible}>
                <TouchableOpacity style={styles.container} onPress={() => {setModalVisible(!modalVisible)}}>
                    <TouchableOpacity style={styles.errorRectangle} onPress={() => {setModalVisible(!modalVisible)}}>
                        <Text style={styles.errorText}>{error}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        );
    }

  return (
    <ImageBackground source={require('../../assets/images/onboarding-bg.png')} style={styles.background}>
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

                <Text style={styles.welcomeBackText}>WELCOME{'\n'}BACK.</Text>
                <Text style={styles.weveMissedText}>WE'VE MISSED YOU!{'\n'}ENTER YOUR USERNAME AND PASSWORD.</Text>

                <View style={styles.rectangle}>
                    <View style={styles.userIcon}>
                        <FontAwesome5 name={'user'} size={17} color='#707070' solid />
                    </View>
                    <TextInput
                        style={styles.usernameInputContainer}
                        placeholder='Username' 
                        placeholderTextColor='#707070'
                        onChangeText={text => setUsername(text)}
                        value={username}
                        autoCapitalize='none'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance='dark'
                        keyboardType='ascii-capable'
                        returnKeyType='next'
                        textContentType='username'
                        selectionColor='#ef473a'
                        clearButtonMode='while-editing'
                        maxLength={28}
                        onSubmitEditing={() => { secondInput.focus(); }}
                        blurOnSubmit={false}
                    />
                    <View style={styles.usernameUnderline} />

                    <View style={styles.passwordIcon}>
                        <FontAwesome5 name={'lock'} size={17} color='#707070' solid />
                    </View>
                    <TextInput
                        style={styles.passwordInputContainer}
                        ref={ref => { secondInput = ref; }}
                        placeholder='Password' 
                        placeholderTextColor='#707070' 
                        onChangeText={text => setPassword(text)}
                        value={password}
                        autoCapitalize='none'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance='dark'
                        keyboardType='ascii-capable'
                        returnKeyType='done'
                        textContentType='password'
                        selectionColor='#ef473a'
                        secureTextEntry={true}
                        clearButtonMode='while-editing'
                        clearTextOnFocus={true}
                    />
                    <View style={styles.passwordUnderline} />
                </View>
                <Text style={styles.forgotYourText} onPress={() => navigation.navigate('ForgotPasswordUsernameScreen')}>FORGOT YOUR PASSWORD?</Text>

                <RenderError />

                <TouchableOpacity style={styles.cancelRectangle} onPress={() => navigation.navigate('WelcomeScreen')}>
                    <Text style={styles.cancelText}>CANCEL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginRectangle} onPress={handleSubmit}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    }, 

	container: {
		flex: 1,
	},

	welcomeBackText: {
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

	weveMissedText: {
		position: 'absolute',
	  	top: 175,
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
		top: 300,
		alignSelf: 'center',
	  	width: 335,
	  	height: 120,
	  	borderRadius: 10,
	  	backgroundColor: '#ffffff',
		opacity: 0.9,
	},

	userIcon: {
        position: 'absolute',
        top: 20,
        left: 18,
        width: 17,
        height: 22,
	},

	usernameInputContainer: {
        position: 'absolute',
        top: 15,
        left: 41,
        width: 276,
        height: 30,
        fontFamily: 'SFProText-Regular',
        fontSize: 17,
        fontWeight: '400',
	},

	usernameUnderline: {
        position: 'absolute',
        top: 44,
        left: 41,
        width: 277,
        height: 1,
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        opacity: 0.5
	},

	passwordIcon: {
        position: 'absolute',
        top: 80,
        left: 18,
        width: 19,
        height: 22,
	},

	passwordInputContainer: {
		position: 'absolute',
		top: 75,
		left: 41,
		width: 276,
		height: 30,
		fontFamily: 'SFProText-Regular',
		fontSize: 17,
		fontWeight: '400',
	},

	passwordUnderline: {
		position: 'absolute',
		top: 104,
		left: 41,
		width: 277,
		height: 1,
		borderColor: '#707070',
		borderStyle: 'solid',
		borderWidth: 1,
		opacity: 0.5
	},

	forgotYourText: {
        position: 'absolute',
        top: 440,
        alignSelf: 'center',
        width: 235,
        height: 30,
        color: '#ffffff',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1.2,
        textDecorationLine: 'underline',
	},

	cancelRectangle: {
		position: 'absolute',
		bottom: 40,
		left: 20,
		width: 125,
		height: 50,
		borderRadius: 25,
		borderColor: '#ef473a',
		borderStyle: 'solid',
		borderWidth: 4,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center'
	},

	cancelText: {
		color: '#ef473a',
		fontFamily: 'Poppins-Bold',
		fontSize: 17,
		fontWeight: '700',
		letterSpacing: 1.2,
	},

	loginRectangle: {
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

	loginText: {
		color: '#ffffff',
		fontFamily: 'Poppins-Bold',
		fontSize: 17,
		fontWeight: '700',
		letterSpacing: 1.2,
    },
    
    errorRectangle: {
        position: 'absolute',
        bottom: 160,
        alignSelf: 'center',
        width: 335,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ef473a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    errorText: {
        color: '#30122D',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 1.2,
        textAlign: 'center'
    },
});