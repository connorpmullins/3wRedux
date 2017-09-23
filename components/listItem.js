import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './common/CardSection';
import * as actions from '../actions';
 

class ListItem extends Component {

	componentWillReceiveProps(props){
	    console.log("inside componentWillReceiveProps", props);
	}

	renderDescription(){

		console.log("ASLKdfjlasjdf", this.props.selectedLibraryId, "---", this.props.library.id);

		if (this.props.library.id === this.props.selectedLibraryId) {
			return (
				<Text>{this.props.library.description}</Text>
			);
		}
	} 



	render() {
		const { titleStyles } = styles;
		const { id, title } = this.props.library;

		const { singleton } = this.props; 

		console.log("inside render")

		return (
			<TouchableWithoutFeedback
				onPress={() => {
					this.props.selectLibrary(id);
				}}
			>
				<View>
					<CardSection>
						<Text style={titleStyles}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}


const styles = {
	titleStyles: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = state => {
	console.log("STATE:", state);

	return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);