import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Avatar } from '../Avatar';

type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
}

type Props = {
    data: MemberProps;
}

export function Member({ data }: Props){
    return (
        <View style={styles.container}>
           <Avatar
              urlImage={data.avatar_url}
           />

           <View>
               <Text style={styles.title}>
                    { data.username }
               </Text>
           </View>
        </View>
    )
}
