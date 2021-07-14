import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { AppointmentProps } from '../../components/Appointment';
import MapComponentDetails from '../../components/MapComponentDetails';

export type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentDetails() {
  // recuperam o titulo e a descricao da postagem
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const navigation = useNavigation();

  // as funcoes handle sao utilizadas na navegacao entre telas 
  function handleChat() {
    navigation.navigate('Chat');
  }

  // caso houvessem mais membros envolvidos na postagem. O usuario ja esta pronto
  const members = [
    {
      id: '1',
      username: 'Vinícius',
      avatar_url: 'https://th.bing.com/th/id/OIP.03iMjoviAusLnMn52GfpYAHaHa?pid=ImgDet&rs=1'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
      />

      <MapComponentDetails />


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
        renderItem={({ item }) => (
          <Member data={item} />
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
