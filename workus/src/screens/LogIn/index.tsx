import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { TextLogIn } from '../../components/TextLogIn';

export function LogIn() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleChooseSides() {
        navigation.navigate('ChooseSides');
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.main}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            Log In
                        </Text>
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
                        name != '' && mail != '' && password != '' ?
                            <ButtonIcon title="Entrar" onPress={handleChooseSides} />
                            : <View style={styles.formnotready}>
                                <Text style={styles.formnotreadytext}>
                                    Dê informações válidas.
                                </Text>
                            </View>
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}