import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      })
      .then(() => {

      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeHolder={'Enter Email'}
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            secureTextEntry
            placeHolder={'Enter Password'}
            value={this.state.text}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
