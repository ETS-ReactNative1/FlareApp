import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';
import MyStorage from '../MyStorage';

/* 
    TODO: 
    - Terms of Service and Privacy Policy links
    - Handle special characters
    - Create entry in the User Table
*/

export default function SignUpUsernameScreen(props) {
    const { navigation } = props;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmed_password, confirmPassword] = React.useState('');
    const phone_number = '+1' + props.route.params.phone_number;
    let secondInput = {};
    let thirdInput = {};
    const [error, setError] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleSubmit = async () => {
        if (password != confirmed_password) {
            setError('PASSWORDS DO NOT MATCH.');
            setModalVisible(!modalVisible);
            RenderError();
        }
        else if (username.length < 1) {
            setError('PLEASE ENTER A USERNAME.');
            setModalVisible(!modalVisible);
            RenderError();
        }
        else if (password.length < 6) {
            setError('PASSWORD MUST BE\nAT LEAST 6 CHARACTERS.');
            setModalVisible(!modalVisible);
            RenderError();
        }
        else {
            try {
                const credentials = { username: username, password: password };
                await Auth.signUp({ username, password, attributes: { phone_number } });
                await AsyncStorage.setItem('userToken', JSON.stringify(credentials));
                /*  await MyStorage.setItem('userToken', credentials); */

                console.log('User successfully created.');
                navigation.navigate('SignUpTFAScreen', { username: username });
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
                else if (error.code === 'UsernameExistsException') {
                    setError('USERNAME ALREADY EXISTS.');
                    setModalVisible(!modalVisible);
                    RenderError();
                }
                else {
                    setError('FATAL ERROR.\nPLEASE TRY AGAIN LATER.');
                    setModalVisible(!modalVisible);
                    RenderError();
                    console.log('Error:', error);
                }
            }
        }
    };

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

                    <Text style={styles.oneLastText}>WELCOME{'\n'}ABOARD.</Text>
                    <Text style={styles.createText}>CREATE YOUR PERSONAL USERNAME AND{'\n'}SET YOUR PASSWORD.</Text>

                    <View style={styles.rectangle}>
                        <View style={styles.userIcon}>
                            <FontAwesome5 name={'user'} size={17} color='#707070' solid />
                        </View>
                        <TextInput
                            style={styles.usernameInputContainer}
                            placeholder='Username' 
                            placeholderTextColor="#707070" 
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
                            returnKeyType='next'
                            textContentType='password'
                            selectionColor='#ef473a'
                            secureTextEntry={true}
                            clearButtonMode='while-editing'
                            clearTextOnFocus={true}
                            onSubmitEditing={() => { thirdInput.focus(); }}
                            blurOnSubmit={false}
                        />
                        <View style={styles.passwordUnderline} />

                        <View style={styles.confirmPassIcon}>
                            <FontAwesome5 name={'lock'} size={17} color='#707070' solid />
                        </View>
                        <TextInput
                            style={styles.confirmPassInputContainer}
                            ref={ref => { thirdInput = ref; }}
                            placeholder='Confirm password' 
                            placeholderTextColor="#707070" 
                            onChangeText={text => confirmPassword(text)}
                            value={confirmed_password}
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
                        <View style={styles.confirmPassUnderline} />
                    </View>

                    <Text style={styles.termsText}>BY SIGNING UP, YOU CONFIRM THAT YOU{'\n'}AGREE TO OUR TERMS OF SERVICE AND{'\n'}HAVE READ AND UNDERSTOOD OUR{'\n'}PRIVACY POLICY.</Text>

                    <RenderError />

                    <TouchableOpacity style={styles.backRectangle} onPress={() => navigation.navigate('SignUpPhoneScreen')}>
                        <Text style={styles.backText}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signUpRectangle} onPress={handleSubmit}>
                        <Text style={styles.signUpText}>SIGN UP</Text>
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

    oneLastText: {
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

    createText: {
        position: 'absolute',
        top: 170,
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
        top: 240,
        alignSelf: 'center',
        width: 335,
        height: 180,
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
        left: 17,
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

    confirmPassIcon: {
        position: 'absolute',
        top: 140,
        left: 18,
        width: 19,
        height: 22,
    },

    confirmPassInputContainer: {
		position: 'absolute',
		top: 135,
		left: 41,
		width: 276,
		height: 30,
		fontFamily: 'SFProText-Regular',
		fontSize: 17,
		fontWeight: '400',
    },

    confirmPassUnderline: {
        position: 'absolute',
        top: 164,
        left: 41,
        width: 277,
        height: 1,
		borderColor: '#707070',
		borderStyle: 'solid',
		borderWidth: 1,
		opacity: 0.5
    },

    termsText: {
        position: 'absolute',
        bottom: 110,
        left: 20,
        color: '#ffd6bf',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1.2,
        lineHeight: 25,
    },

    backRectangle: {
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

    backText: {
		color: '#ef473a',
		fontFamily: 'Poppins-Bold',
		fontSize: 17,
		fontWeight: '700',
		letterSpacing: 1.2,
    },
    
    signUpRectangle: {
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

    signUpText: {
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