import React from 'react';
import { InputText, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const { TextInputStyle } = styles;

  return (
    <View>
      <Text>{label}</Text>
      <InputText
        value={value}
        style={TextInputStyle}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  TextInputStyle: {
    height: 40,
    width: 100
  }
};

export { Input };
