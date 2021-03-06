import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import { CategorySelect } from '../../components/CategorySelect';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { MediumInput } from '../../components/MediumInput';
import { GuildProps } from '../../components/Appointment';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export function AppointmentCreate() {
   const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
   const [category, setCategory] = useState('');

   // armazenam os dados da postagem
   const [day, setDay] = useState('');
   const [month, setMonth] = useState('');
   const [projname, setProjname] = useState('');
   const [description, setDescription] = useState('');

   const navigation = useNavigation();

   // as funcoes handle sao utilizadas na navegacao entre telas
   function handleCategorySelect(categoryId: string) {
      setCategory(categoryId);
   }

   function handleMap() {
      navigation.navigate('Map');
   }
   // funcao que salva os dados da postagem
   async function handleSave() {
      const newAppointment = {
         id: uuid.v4(),
         guild,
         category,
         date: `${day}/${month}`,
         projname,
         description,
      };

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(
         COLLECTION_APPOINTMENTS,
         JSON.stringify([...appointments, newAppointment])
      );

      navigation.navigate('Home');
   }

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}
      >
         <Background>
            <ScrollView>
               <Header
                  title="Criar Projeto"
               />

               <Text style={[styles.label, { marginLeft: 24, marginTop: 16, marginBottom: 10 }]}>
                  Categoria
               </Text>

               <CategorySelect
                  hasCheckBox
                  setCategory={handleCategorySelect}
                  categorySelected={category}
               />

               <View style={styles.form}>
                  <RectButton onPress={handleMap}>
                     <View style={styles.select}>

                        <View style={styles.selectBody}>
                           <Text style={styles.label}>
                              Selecione a localiza????o
                           </Text>
                        </View>

                        <Feather
                           name="chevron-right"
                           color={theme.colors.heading}
                           size={18}
                        />

                     </View>
                  </RectButton>


                  <View style={styles.field}>
                     <View>
                        <Text style={styles.label}>
                           Dia e m??s
                        </Text>

                        <View style={styles.column}>
                           <SmallInput
                              maxLength={2}
                              onChangeText={setDay}
                           />
                           <Text style={styles.divider}>
                              /
                           </Text>
                           <SmallInput
                              maxLength={2}
                              onChangeText={setMonth}
                           />
                        </View>
                     </View>

                     <View>
                        <Text style={styles.label}>
                           Profiss??o requisitada
                        </Text>

                        <View style={styles.column}>
                           <MediumInput
                              maxLength={20}
                              onChangeText={setProjname}
                           />
                        </View>
                     </View>
                  </View>

                  <View style={[styles.field, { marginBottom: 6 }]}>
                     <Text style={styles.label}>
                        Descri????o
                     </Text>
                  </View>

                  <TextArea
                     multiline
                     maxLength={100}
                     numberOfLines={5}
                     autoCorrect={false}
                     onChangeText={setDescription}
                  />

                  <View style={styles.footer}>
                     {
                        // validacao dos dados, evitanto espacos vazios
                        // nao h?? verifica????o de dias inexistentes, como 30/02
                        (category === '1' || category === '2') &&
                           (day != '' && day >= '01' && day <= '31') &&
                           (month != '' && month >= '01' && month <= '12') &&
                           projname != '' &&
                           description != '' ?
                           <ButtonIcon
                              title="Publicar"
                              onPress={handleSave}
                           /> :

                           <View style={styles.formnotready}>
                              <Text style={styles.formnotreadytext}>
                                 D?? informa????es v??lidas.
                              </Text>
                           </View>

                     }
                  </View>

               </View>

            </ScrollView>
         </Background>
      </KeyboardAvoidingView>
   )
}
