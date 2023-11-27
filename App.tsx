import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button/button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaEventos from './components/screens/ListaEventos';
import EdicaoEvento from './components/screens/editar/EditarEvento';
import CriarEvento from './components/screens/criar/CriarEvento';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Lista">
    <Stack.Screen name="Lista" component={ListaEventos}
    options={{ title: 'Eventos' }} />
    <Stack.Screen name="EdicaoEvento" component={EdicaoEvento}
    options={{ title: 'Editar Evento' }} />
     <Stack.Screen name="CriarEvento" component={CriarEvento}
    options={{ title: 'Criar Eventos' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000000'
    },
    input: {
    borderWidth: 1,
    backgroundColor: '#8B0000',
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    } });