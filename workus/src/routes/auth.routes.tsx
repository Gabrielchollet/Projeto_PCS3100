import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { Chat } from '../screens/Chat';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { Settings } from '../screens/Settings';
import { LogIn } from '../screens/LogIn';
import { ChooseSides } from '../screens/ChooseSides';
import { Register } from '../screens/Register';
import { Map } from '../screens/Map';

import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="LogIn"
        component={LogIn}
      />
      <Screen
        name="Register"
        component={Register}
      />
      <Screen
        name="ChooseSides"
        component={ChooseSides}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="Chat"
        component={Chat}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
      <Screen
        name="Settings"
        component={Settings}
      />
      <Screen
        name="Map"
        component={Map}
      />
    </Navigator>
  )


}