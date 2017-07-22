import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      authDomain: 'react-auth-2454c.firebaseapp.com',
      apiKey: 'AIzaSyCc3IYjCIfZAuDJQJvSfWOElX3NCFbdw1o',
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
        <LoginForm />
      </View>
    );
  }
}

export default App;
