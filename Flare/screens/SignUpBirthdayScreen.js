import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SignUpBirthdayScreen(props) {
    
    const { navigation } = props;
    const [birthday, setUsername] = React.useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/onboarding-bg.png')} style={styles.container} />
                <StatusBar barStyle={"light-content"} />
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
    

});