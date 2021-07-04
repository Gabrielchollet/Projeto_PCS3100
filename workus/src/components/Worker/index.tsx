import React from 'react';

import {
    View,
    Image
} from 'react-native';

import { styles } from './styles';

export function Worker() {
    const uri = 'https://thumbs.dreamstime.com/z/trabalhador-executando-desenho-design-criativo-do-162331462.jpg';

    return (
        <View>
            <Image
                source={{ uri }}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}