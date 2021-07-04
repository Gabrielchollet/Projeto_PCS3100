import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
    View,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Boss } from '../../components/Boss';
import { Worker } from '../../components/Worker';
import { styles } from './styles';
import { Background } from '../../components/Background';

export function ChooseSides() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('Home');
    }
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Selecione uma categoria
                </Text>
                <View style={styles.content}>
                    <RectButton onPress={handleHome}>
                        <View style={styles.worker}>
                            <Worker />
                        </View>
                    </RectButton>
                    <RectButton onPress={handleHome}>
                        <View style={styles.boss}>
                            <Boss />
                        </View>
                    </RectButton>
                </View>
                <View style={styles.categories}>
                    <Text style={styles.subtitle}>
                        Trabalhador
                    </Text>
                    <Text style={styles.subtitle}>
                        Empregador
                    </Text>
                </View>
            </View>
        </Background>
    );
}