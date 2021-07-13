// Recebe texto na tela de Create
// indica a profissao requisitada

import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function MediumInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />


  )
}
