import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
   const uri = 'https://th.bing.com/th/id/OIP.3QpoxXE3sAdkmjf1diSjRQAAAA?pid=ImgDet&w=170&h=170&rs=1';
   
    return (
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
    )
}
