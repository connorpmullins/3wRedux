import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import reducers from './Reducers';
import LibraryList from './components/libraryList';
import logger from 'redux-logger';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(logger))}>
        <View style={{ flex: 1}}>
          <Header headerText="Tech Stack" />
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}

