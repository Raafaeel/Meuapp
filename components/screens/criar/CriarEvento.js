import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addEvento } from '../../../service/eventoService';

function CriarEvento({ route, navigation }) {
  const [evento, setEvento] = useState({
    nome: '',
    data: '',
    descricao: '',
    status: '',
    // Set other initial properties as needed
  });

  useEffect(() => {
    if (route.params && route.params.evento) {
      setEvento(route.params.evento);
    }
  }, [route.params]);

  const salvarEdicoes = async () => {
    try {
      await addEvento(evento);
      alert('Evento criado com sucesso!');
      navigation.goBack();
    } catch (error) {
      alert('Erro ao criar o evento.');
      console.error("Erro ao criar evento:", error);
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
    </View>
  );
}

export default CriarEvento;