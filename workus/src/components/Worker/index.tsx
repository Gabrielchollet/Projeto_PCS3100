// Componente com a imagem utilizada na tela ChooseSides para representar o trabalhador

import React from 'react';

import {
    View,
    Image
} from 'react-native';
import HammerImg from '../../assets/hammer.png';
import { styles } from './styles';

export function Worker() {

    return (
        <View>
            <Image
                source={HammerImg}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}