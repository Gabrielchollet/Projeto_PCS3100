// eh o botao amarelo utilizado em varias das telas, com um nome em seu centro

import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}