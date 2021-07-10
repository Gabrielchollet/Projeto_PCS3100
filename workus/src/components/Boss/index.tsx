import React from 'react';

import {
    View,
    Image
} from 'react-native';
import TieImg from '../../assets/tie.png';

import { styles } from './styles';

export function Boss() {
    return (
        <View>
            <Image
                source={TieImg}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}