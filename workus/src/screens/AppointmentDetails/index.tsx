import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { AppointmentProps } from '../../components/Appointment';

export type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentDetails(){
 const route = useRoute();
 const { guildSelected } = route.params as Params; 
 
 const navigation = useNavigation();

 function handleChat(){
     navigation.navigate('Chat');
 }


  const members = [
   {
     id: '1',
     username: 'Rodrigo',
     avatar_url: 'https://th.bing.com/th/id/OIP.03iMjoviAusLnMn52GfpYAHaHa?pid=ImgDet&rs=1'
   }
 ]

    return (
       <Background> 
           <Header 
             title="Detalhes"
           />
           <Image 
             source={BannerImg}
             style={styles.banner}
           />
             <View style={styles.bannerContent}>
                  <Text style={styles.title}>
                    {guildSelected.projname}
                  </Text>

                  <Text style={styles.subtitle}>
                  {guildSelected.description}
                  </Text>
              </View>   
           

           <ListHeader 
              title="Dono do Projeto"
              subtitle="Serviço Disponível" 
           />

           <FlatList 
             data={members}
             keyExtractor={item => item.id}
             renderItem={({item}) => (
                <Member data={item}/>
             )}
             ItemSeparatorComponent={() => <ListDivider />}
             style={styles.members}
           />

           <View style={styles.footer}>
              <ButtonIcon 
                title="Interesse no serviço"
                onPress={handleChat}
              />
           </View>
       </Background>
    )
}
