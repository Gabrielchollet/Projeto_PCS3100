import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type User = {
    id: string;
    name: string;
}

export type ChatRoom = {
    id: string;
    users: User[];
}

type Message = {
    id: string;
    content: string;
    user: User;
}

export type ChatMessageProps = {
    message: Message;
}

export function ChatMessage({message}: ChatMessageProps){
    const { secondary30, secondary70 } = theme.colors;
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }
    
    return (
        <View style={styles.container}>
            <View style={[
                styles.messagebox,
                {
                  backgroundColor: isMyMessage() ? secondary30 : secondary70,
                  marginLeft: isMyMessage() ? 130 : 0,
                  marginRight: isMyMessage() ? 0 : 130
                }
            ]}>
                <Text style={styles.chattext}> {message.content} </Text>
            </View>
        </View>
    )
}
