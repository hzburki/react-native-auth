import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      authDomain: 'react-auth-2454c.firebaseapp.com',
      databaseURL: 'https://react-auth-2454c.firebaseio.com',
      apiKey: 'AIzaSyCc3IYjCIfZAuDJQJvSfWOElX3NCFbdw1o',
      projectId: 'react-auth-2454c',
      storageBucket: 'react-auth-2454c.appspot.com',
      messagingSenderId: '101955508379'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLoginScreen() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.centered}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        {this.renderLoginScreen()}
      </View>
    );
  }
}

const styles = {
  centered: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center'
  }
};

export default App;
