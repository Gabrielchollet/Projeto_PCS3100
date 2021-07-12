import React from 'react';
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Avatar } from '../../components/Avatar';
import { Header } from '../../components/Header';
import { styles } from './styles';
import TieImg from '../../assets/tie.png';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';

export function Perfil() {
    const uri = 'https://th.bing.com/th/id/R.436cbfdc5b1f957836aaae4005d7e513?rik=wb07auyTWxfWAQ&riu=http%3a%2f%2fwww.megafestacwb.com.br%2fwp-content%2fuploads%2f2016%2f05%2fbade-estrela.jpg&ehk=Cge%2fksPH9BfMcY9sMguYMgxB9CdAbttwNCxhZMFPDH0%3d&risl=&pid=ImgRaw';

    function handleEdit() {
        Alert.alert(
            'Esse recurso não foi implementado',
            '(Devido ao contexto no qual o projeto está inserido).'
        )
    }
    return (

        <View style={styles.container}>
            <Header title="Perfil" />
            <View style={styles.content}>
                <View style={styles.topics}>
                    <Text style={styles.title}>
                        Sua Imagem
                    </Text>
                    <Text style={styles.title}>
                        Seu Nome
                    </Text>
                </View>
                <View style={styles.topics}>
                    <Avatar urlImage="https://th.bing.com/th/id/OIP.03iMjoviAusLnMn52GfpYAHaHa?pid=ImgDet&rs=1" />
                    <Text style={styles.subtitle}>
                        Vinícius
                    </Text>
                </View>
            </View>
            <View style={styles.contenttwo}>
                <View style={styles.topics}>
                    <Text style={styles.title}>
                        Categoria
                    </Text>


                    <Image
                        source={TieImg}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <Text style={styles.subtitletwo}>
                    Empregador
                </Text>
            </View>
            <View style={styles.contenttwo}>
                <Text style={styles.title}>
                    Descrição
                </Text>
                <Text style={styles.subtitle}>
                    O seu perfil não apresenta nenhuma descrição. {'\n'}
                    Clique no botão de edição e coloque uma para que os outros usuários possam te conhecer melhor.
                </Text>
                <View style={styles.avaliation}>
                    <Text style={styles.title}>
                        Avaliação do usuário
                    </Text>
                    <View style={styles.stars}>
                        <Image
                            source={{ uri }}
                            style={styles.imagetwo}
                            resizeMode="cover"
                        />
                        <Image
                            source={{ uri }}
                            style={styles.imagetwo}
                            resizeMode="cover"
                        />
                        <Image
                            source={{ uri }}
                            style={styles.imagetwo}
                            resizeMode="cover"
                        />
                        <Image
                            source={{ uri }}
                            style={styles.imagetwo}
                            resizeMode="cover"
                        />
                        <Image
                            source={{ uri }}
                            style={styles.imagetwo}
                            resizeMode="cover"
                        />
                    </View>
                </View>
                <View style={styles.contenttwo}>

                    <View style={styles.topics}>
                        <Text style={styles.title}>
                            Editar Perfil
                        </Text>
                        <BorderlessButton onPress={handleEdit}>
                            <MaterialCommunityIcons
                                name="pencil-outline"
                                size={24}
                                color={theme.colors.heading}
                            />
                        </BorderlessButton>
                    </View>

                </View>
            </View>
        </View>
    );
}