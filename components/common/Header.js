import React from 'react'
import ReactNative from 'ReactNative';
import { Text, View } from 'react-native';

//View makes it easier to style components
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
	<View style ={viewStyle}> 
		<Text style ={textStyle}> 
			{props.headerText} 
		</Text>
	</View>
	);
};

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F8F8F8',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

//export makes things available to the rest of the app
export { Header };