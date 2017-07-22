import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCc3IYjCIfZAuDJQJvSfWOElX3NCFbdw1o',
      authDomain: 'react-auth-2454c.firebaseapp.com',
      databaseURL: 'https://react-auth-2454c.firebaseio.com',
      projectId: 'react-auth-2454c',
      storageBucket: 'react-auth-2454c.appspot.com',
      messagingSenderId: '101955508379'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>Hello Auth</Text>
      </View>
    );
  }
}

export default App;
