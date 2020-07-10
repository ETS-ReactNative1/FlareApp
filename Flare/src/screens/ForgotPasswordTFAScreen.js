import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ForgotPasswordTFAScreen(props) {
    const { navigation } = props;
    const [code, setTFACode] = React.useState('');
    const [error, setError] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const username = props.route.params.username;

    const handleSubmit = () => {
        if (code.length < 6) {
            setError('PLEASE ENTER A VALID CODE.');
            setModalVisible(!modalVisible);
            RenderError();
        }
        else {
            navigation.navigate('ForgotPasswordResetScreen', {username: username, code: code});
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

    return(
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

                    <Text style={styles.messagesText}>CHECK{'\n'}YOUR MESSAGES.</Text>
                    <Text style={styles.codeText}>WE SENT YOU A 6 DIGIT CODE.{'\n'}ENTER IT HERE.</Text>

                    <View style={styles.rectangle}>
                        <View style={styles.tfaIcon}>
                            <Icon name={'shield-lock'} size={20} color='#707070' />
                        </View>
                        <TextInput
                            style={styles.tfaInputContainer}
                            placeholder='6 digit code' 
                            placeholderTextColor='#707070'
                            onChangeText={text => setTFACode(text)}
                            value={code}
                            autoCapitalize='none'
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            keyboardAppearance='dark'
                            keyboardType='number-pad'
                            returnKeyType='done'
                            textContentType='oneTimeCode'
                            selectionColor='#ef473a'
                            clearButtonMode='while-editing'
                            maxLength={6}
                        />
                        <View style={styles.underline} />
                    </View>

                    <RenderError />

                    <TouchableOpacity style={styles.backRectangle} onPress={() => navigation.navigate('ForgotPasswordUsernameScreen')}>
                        <Text style={styles.backText}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
                        <FontAwesome5 name={'arrow-circle-right'} size={60} color='#ef473a' solid />
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

    messagesText: {
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

    codeText: {
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
        height: 60,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        opacity: 0.9,
    },

    tfaIcon: {
        position: 'absolute',
        top: 20,
        left: 17,
        width: 21,
        height: 22,
    },

    tfaInputContainer: {
        position: 'absolute',
        top: 15,
        left: 40,
        width: 278,
        height: 30,
        fontFamily: 'SFProText-Regular',
        fontSize: 17,
        fontWeight: '400',
    },

    underline: {
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

    backRectangle: {
        position: 'absolute',
        bottom: 40,
        left: 40,
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

    continueButton: {
        position: 'absolute',
        bottom: 29,
        right: 40,
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