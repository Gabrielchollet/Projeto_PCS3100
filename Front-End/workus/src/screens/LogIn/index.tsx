import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { TextLogIn } from '../../components/TextLogIn';
import { theme } from '../../global/styles/theme';

export function LogIn() {
    // valores armazenados caso fosse necessaria a identificacao no BD
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    // as funcoes handle sao utilizadas na navegacao entre telas
    function handleHome() {
        navigation.navigate('Home');
    }

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.main}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <BorderlessButton onPress={handleGoBack}>
                                <Feather
                                    name="arrow-left"
                                    size={24}
                                    color={theme.colors.heading}
                                />
                            </BorderlessButton>
                            <Text style={styles.title}>
                                Log In
                            </Text>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.subtitle}>
                            Nome do usuário
                        </Text>
                        <TextLogIn onChangeText={setName} />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.subtitle}>
                            Email
                        </Text>
                        <TextLogIn
                            onChangeText={setMail}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.subtitle}>
                            Senha
                        </Text>
                        <TextLogIn
                            onChangeText={setPassword}
                        />
                    </View>
                    {
                        // usuario ja pronto
                        (name == 'Vinicius' && mail == 'email' && password == 'PCS3100')
                            ?
                            <ButtonIcon title="Entrar" onPress={handleHome} />
                            : <View style={styles.formnotready}>
                                <Text style={styles.formnotreadytext}>
                                    Dê informações de uma conta existente.
                                </Text>
                            </View>
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}