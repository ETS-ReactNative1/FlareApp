import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppNavigator from './screens/AppNavigator';
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const fetchFonts = () => {
	return Font.loadAsync({
    	'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    	'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  	});
};

export default function App() {
  	const [dataLoaded, setDataLoaded] = useState(false);

  	if (!dataLoaded) {
    	return (
		<AppLoading
			startAsync={fetchFonts}
			onFinish={() => setDataLoaded(true)}
		/>
		);
	}

	return (
		<AppNavigator />
	);
}