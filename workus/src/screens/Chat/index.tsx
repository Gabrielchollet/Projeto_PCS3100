import React from 'react';
import { 
    View,
    FlatList, 
    TextInput, 
    TextInputProps, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { styles } from './styles';
import chatRoomData from '../../data/chats';
import { ChatMessage } from '../../components/ChatMessage';

export function Chat({...rest}: TextInputProps){
    const navigation = useNavigation();

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }
    return (
        <Background>
            <KeyboardAvoidingView 
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                    <Header title="Conversa"/>
                     
                        <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={ chatRoomData.messages }
                        renderItem={({ item }) => <ChatMessage message={item}/>}
                        />
                    
                    <ScrollView>
                        <View style={styles.content}>
                            <TextInput 
                            style={styles.text}
                            multiline
                            {...rest}
                            />
                        </View>    
                    </ScrollView>   
            </KeyboardAvoidingView>              
        </Background>
    )
}
