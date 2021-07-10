import React from 'react';
import { Image } from 'react-native';

import MedalImg from '../../assets/medal.png';
import { styles } from './styles';

export function GuildIcon() {
  return (
    <Image
      source={MedalImg}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
