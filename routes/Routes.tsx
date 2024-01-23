import React from 'react'
import { View, Text } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../src/screens/HomeScreen/HomeScreen';
import { OverviewScreen } from '../src/screens/OverviewScreen/OverviewScreen';
import { NewSnackScreen } from '../src/screens/NewSnackScreen/NewSnackScreen';
import { SuccessAddSnackScreen } from '../src/screens/SuccessAddSnackScreen/SuccessAddSnackScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  OverviewScreen: undefined;
  NewSnackScreen: undefined;
  SuccessAddSnackScreen: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
        <Stack.Screen name="NewSnackScreen" component={NewSnackScreen} />
        <Stack.Screen name="SuccessAddSnackScreen" component={SuccessAddSnackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}