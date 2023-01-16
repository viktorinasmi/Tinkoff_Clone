import React from 'react';
import {TextInput} from 'react-native';
import {styles} from '@src/components/ui/Field/Field.styles';

interface FieldProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}

export const Field = ({onChange, value, placeholder, isSecure}: FieldProps) => {
  return (
    <TextInput
      style={styles.input}
      showSoftInputOnFocus={false}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      autoCapitalize="none"
    />
  );
};
