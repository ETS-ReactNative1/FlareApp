import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function LoginScreen(props) {

	const { navigation } = props;
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

  return (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
			<Text style={styles.welcomeBackText}>WELCOME
			BACK.
			</Text>
			<Text style={styles.weveMissedText}>WE'VE MISSED YOU!{"\n"}
					ENTER YOUR USERNAME AND PASSWORD.
			</Text>
			<KeyboardAvoidingView
				behavior="padding"
				style={styles.inner}
			>
				<View style={styles.rectangle}>
					<View style={styles.userIcon}>
					<FontAwesome5 name={'user'} size={17} color="#707070" solid />
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
					/>
					<View style={styles.usernameUnderline}></View>
					<View style={styles.passwordIcon}>
					<FontAwesome5 name={'lock'} size={17} color="#707070" solid />
					</View>
					<TextInput
						style={styles.passwordInputContainer}
						placeholder='Password' 
						placeholderTextColor="#707070" 
						onChange={text => setPassword(text)}
						value={password}
						autoCapitalize='none'
						autoCorrect={false}
						enablesReturnKeyAutomatically={true}
						keyboardAppearance='dark'
						keyboardType='ascii-capable'
						returnKeyType='go'
						textContentType='password'
						selectionColor='#ef473a'
						secureTextEntry={true}
					/>
					<View style={styles.passwordUnderline}></View>
				</View>
				<Text style={styles.forgotYourText} onPress={() => navigation.navigate('ForgotPasswordPhone')}>FORGOT YOUR PASSWORD?</Text>
				<TouchableOpacity style={styles.cancelRectangle} onPress={() => navigation.navigate('WelcomeScreen')}>
					<Text style={styles.cancelText}>CANCEL</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.loginRectangle} onPress={() => navigation.navigate('RecentPostsScreen')}>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>
				<View style={{ height: 80 }} />
			</KeyboardAvoidingView>
		</View>
	</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({

	container: {
		flex: 1,
		width: 375,
		height: 812
	},

	inner: {
		flex: 2,
		alignContent: 'center',
		justifyContent: 'center'
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
		lineHeight: 80,
	},

	weveMissedText: {
		position: 'absolute',
	  	top: 204,
	  	left: 20,
		color: '#ffd6bf',
		fontFamily: 'Poppins-Bold',
		fontSize: 15,
		fontWeight: '700',
		letterSpacing: 1.05,
		lineHeight: 25,
	},

	rectangle: {
		//position: 'absolute',
		//top: 370,
		left: 20,
	  	width: 335,
	  	height: 120,
	  	borderRadius: 10,
	  	backgroundColor: '#ffffff',
		opacity: 0.9,
		marginTop: 210
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
	},

	forgotYourText: {
	  //position: 'absolute',
	  top: 5,
	  left: 74,
	  color: '#ffffff',
	  fontFamily: 'Poppins-Bold',
	  fontSize: 15,
	  fontWeight: '700',
	  letterSpacing: 1.05,
	  lineHeight: 28,
	  textDecorationLine: 'underline',
	},

	cancelRectangle: {
		//position: 'absolute',
		top: 15,
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
		letterSpacing: 1.19,
	},

	loginRectangle: {
		//position: 'absolute',
		top: -35,
		left: 155,
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
		letterSpacing: 1.19,
	},

});