import React from 'react';

import {
    View,
    Image
} from 'react-native';

import { styles } from './styles';

export function Boss() {
    const uri = 'https://th.bing.com/th/id/OIP.tdY7X8Bx7IceCF3FF82VAwAAAA?pid=ImgDet&w=222&h=191&rs=1';

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