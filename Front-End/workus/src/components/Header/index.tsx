// representa a parte superior de varias telas, com uma cor cinza, um titulo, e um botao de voltar para a tela anterior

import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {
    const navigation = useNavigation();

    // as funcoes handle sao utilizadas na navegacao entre telas
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={theme.colors.heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action ?
                    <View>
                        {action}
                    </View>
                    :
                    <View style={{ width: 24 }} />
            }


        </View>
    )
}
