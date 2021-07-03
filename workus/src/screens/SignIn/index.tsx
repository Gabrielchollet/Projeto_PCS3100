import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 import IllustrationImg from '../../assets/illustration.png';
 import { styles } from './styles';
 import { ButtonIcon } from '../../components/ButtonIcon';
 import { Background } from '../../components/Background';


export function SignIn(){
    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate('Home');
    }
    return(
      <Background>
                <View style={styles.container}>
                
                <View style={styles.header}>
                    <Image source={IllustrationImg} style={styles.image}/>
                </View>
                

                    <View style={styles.content}>
                        <ButtonIcon
                        title="Log In"
                        onPress={handleSignIn}
                        />
                        <ButtonIcon 
                        title= "Register"
                        activeOpacity={0.7}
                        />
                    </View>
                </View>
        </Background>
    )
}