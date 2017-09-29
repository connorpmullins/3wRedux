import React, {Component} from 'react';
import {
	LayoutAnimation,
	Text, 
	TouchableWithoutFeedback, 
	View
} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './common/CardSection';
import * as actions from '../actions';
 

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription(){
		const { library, selectedLibraryId } = this.props;

		if (library.id === selectedLibraryId) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{this.props.library.description}
					</Text>
				</CardSection>
			);
		}
	} 

	render() {
		const { titleStyles } = styles;
		const { id, title } = this.props.library; 

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
	return { selectedLibraryId: state.selectedLibraryID };
};

export default connect(mapStateToProps, actions)(ListItem);
