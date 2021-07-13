import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
    View,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Boss } from '../../components/Boss';
import { Worker } from '../../components/Worker';
// worker e boss sao as fotos das opções que aparecem na tela

import { styles } from './styles';
import { Background } from '../../components/Background';


// como esta associada ao cadastro do usuario, a tela nao armazena dados localmente
export function ChooseSides() {
    const navigation = useNavigation();

    // as funcoes handle sao utilizadas na navegacao entre telas
    function handleSignIn() {
        navigation.navigate('SignIn');
    }
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Selecione uma categoria
                </Text>
                <View style={styles.content}>
                    <RectButton onPress={handleSignIn}>
                        <View style={styles.worker}>
                            <Worker />
                        </View>
                    </RectButton>
                    <RectButton onPress={handleSignIn}>
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
                <Text style={styles.information}>
                    O registro de usuários está indisponível
                </Text>
            </View>
        </Background>
    );
}