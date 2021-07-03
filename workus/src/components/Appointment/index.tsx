import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import { theme } from '../../global/styles/theme';
import CalendarSvg from '../../assets/calendar.svg';


export type GuildProps = {
    id: string,
    name: string,
    icon: null,
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    projname: string;
    date: string;
    description: string;
    owner: boolean;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({data, ...rest}: Props){
 data.owner = true  
    return (
        <RectButton {...rest}>
            <View style={styles.container}>
              <GuildIcon />

              <View style={styles.content}>
                  <View style={styles.header}>
                                <Text style={styles.title}>
                                  {data.projname}
                                </Text>

                                <Text style={styles.category}>
                                    {data.category === '1' ? 'Trabalhador' : 'Empregador'}
                                </Text>
                            </View>
                                <View style={styles.footer}>
                                            <View style={styles.dateInfo}>
                                                <CalendarSvg />

                                                <Text style={styles.date}>
                                                    {data.date}
                                                </Text>
                                            </View>
                                        
                                    <View style={styles.playersInfo}>
                                        <PlayerSvg fill=
                                          {data.owner == true ? 
                                            theme.colors.off : theme.colors.on}
                                        />

                                        <Text style={[
                                            styles.player,
                                            {color: data.owner == true ? 
                                             theme.colors.off : theme.colors.on}
                                        ]}>
                                            Seu projeto
                                        </Text>
                               </View>
                  </View>
              </View>

            </View>
        </RectButton>
    )
}
