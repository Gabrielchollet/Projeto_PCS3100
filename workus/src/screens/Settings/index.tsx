import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Linesettings } from '../../components/Linesettings';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Settings() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('SignIn');
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.button}>
                    <BorderlessButton onPress={handleGoBack}>
                        <Feather
                            name="arrow-left"
                            size={24}
                            color={theme.colors.heading}
                        />
                    </BorderlessButton>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Configurações
                    </Text>
                    <AntDesign
                        name="setting"
                        size={24}
                        color={theme.colors.highlight}
                    />
                </View>
            </View>
            <View style={styles.list}>
                <RectButton>
                    <Text style={styles.topic}>
                        Perfil
                    </Text>
                </RectButton>
                <Linesettings />
                <RectButton>
                    <Text style={styles.topic}>
                        Privacidade
                    </Text>
                </RectButton>
                <Linesettings />
                <RectButton>
                    <Text style={styles.topic}>
                        Segurança
                    </Text>
                </RectButton>
                <Linesettings />
                <RectButton>
                    <Text style={styles.topic}>
                        Notificações
                    </Text>
                </RectButton>
                <Linesettings />
                <RectButton onPress={handleSignIn}>
                    <Text style={styles.topic}>
                        Log Out
                    </Text>
                </RectButton>
                <Linesettings />

            </View>
        </View>

    );
}