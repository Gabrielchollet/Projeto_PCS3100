// o avatar eh a imagem utilizada na tela home e na tela appointmentdetails como imagem do usuario

import React from 'react';
import { View, Image } from 'react-native';

type Props = {
    urlImage: string;
}

import { styles } from './styles';

export function Avatar({ urlImage }: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </View>
    )

}