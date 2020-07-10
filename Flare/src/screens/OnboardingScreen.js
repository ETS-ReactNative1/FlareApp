import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Modal } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

/* 
    TODO:
    - 3 screens explaining process
    - ask for user location
*/

export default function OnboardingScreen(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Onboarding
                pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});