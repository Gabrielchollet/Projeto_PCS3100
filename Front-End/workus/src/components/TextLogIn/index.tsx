// recebe os dados do usuario na tela de LogIn e na tela de Register

import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextLogIn({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />


  )
}
