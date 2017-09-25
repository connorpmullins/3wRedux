import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback } from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
// import {selectLibrary} from '../Reducers/selectedReducer';
import * as select from '../Reducers/selectedReducer';


class ListItem extends Component {
  componentWillReceiveProps() {
    console.log("inside will receive props");
  }

	render() {
		return (
      <TouchableWithoutFeedback onPress={() => { 
              console.log("pressing!", this.props.library.id);
              this.props.selectLibrary(this.props.library.id);
            }}>
        <View>
    			<CardSection>
    				<Text>
    					{this.props.library.title}
    				</Text>
    			</CardSection>
          {this.renderDetails()}
        </View>
      </TouchableWithoutFeedback>
			)
	}

  renderDetails() {
    console.log(this.props.library.id, this.props.selectedId);
    if(this.props.library.id === this.props.selectedId) {
      console.log("returning something")
      return (
        <View>
          <Text>{this.props.library.description}</Text>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log("inside mapStateToProps", state);
  return { selectedId: state.selectedId };
};

// const mapDispatchToProps = dispatch => {
//   return { selectLibrary: (id) => {dispatch(selectLibrary(id))} }
// };

export default connect(mapStateToProps, select)(ListItem);
// export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
