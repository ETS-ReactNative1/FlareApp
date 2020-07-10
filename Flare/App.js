import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppNavigator from './src/screens/AppNavigator';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import MyStorage from './src/MyStorage';

Amplify.configure(config);

const fetchFonts = () => {
	return Font.loadAsync({
    	'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    	'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  	});
};

export default function App() {
  	const [dataLoaded, setDataLoaded] = React.useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} />
		);
	}
  	
	return (
		<AppNavigator />
	);
}

/* 
	GraphQL endpoint: https://elogv5kiuvd5tmfaf4idgt2qma.appsync-api.us-east-2.amazonaws.com/graphql
	GraphQL API KEY: da2-hurqazqkujg7rbad7bmwxbuzba 
*/