import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import reducers from './Reducers';
import LibraryList from './components/libraryList';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stack" />
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}

