import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { atualizarEvento } from '../../../service/eventoService';
function EdicaoEvento({ route, navigation }) {
 const [evento, setEvento] = useState(route.params.evento);
 const salvarEdicoes = async () => {
 try {
 await atualizarEvento(evento);
 alert('Evento atualizado com sucesso!');
 navigation.goBack();
 } catch (error) {
 alert('Erro ao atualizar o evento.');
 console.error("Erro ao atualizar evento:", error);
 }
 };
 
 return (
    <View style={styles.container}>
    <TextInput
    value={evento.nome}
    onChangeText={nome => setEvento({ ...evento, nome })}
    placeholder="Nome do Evento"
    style={styles.input}
    />
    <TextInput
    value={evento.data}
    onChangeText={data => setEvento({ ...evento, data })}
    placeholder="Data"
    style={styles.input}
    />
    <TextInput
 value={evento.descricao}
 onChangeText={descricao => setEvento({ ...evento, descricao })}
 placeholder="Descrição"
 style={styles.input}
 />
 <TextInput
 value={evento.status}
 onChangeText={status => setEvento({ ...evento, status })}
 placeholder="Status"
 style={styles.input}
 />
 <Button title="Salvar" onPress={salvarEdicoes} />
 </View> );
}
export default EdicaoEvento;