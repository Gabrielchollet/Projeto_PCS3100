// espaço maior de inserção de texto, recebe a descrição da postagem

import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />


  )
}
