import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            value={this.state.text}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
