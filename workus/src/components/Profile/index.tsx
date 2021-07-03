import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Avatar } from '../Avatar';

export function Profile(){
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://th.bing.com/th/id/OIP.03iMjoviAusLnMn52GfpYAHaHa?pid=ImgDet&rs=1"/>

            <View>
                  <View style={styles.user}>
                      <Text style={styles.greeting}>
                          Olá,
                      </Text>

                      <Text style={styles.username}>
                        Rodrigo
                      </Text>
                  </View>
            </View>
           
        </View>
    )
}