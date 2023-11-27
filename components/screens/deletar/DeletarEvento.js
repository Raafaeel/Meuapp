import { deleteEvento } from "../../../service/eventoService";
import { Alert } from 'react-native';

async function deletar(id, eventos, setEventos) {
 try {
 await deleteEvento(id);
 const eventosAtualizado = eventos.filter(evento => evento.id !== id);
 setEventos(eventosAtualizado);
 Alert.alert('Sucesso', 'Evento deletado com sucesso!');
 } catch (error) {
 Alert.alert('Erro', 'Ocorreu um erro ao tentar deletar o evento.');
 } }
 
 export function deletarEvento(item, eventos, setEventos) {
    Alert.alert(
    'Deletar Evento',
    `Você tem certeza que deseja deletar o evento ${item.nome}?`,
    [
    { text: 'Não', style: 'cancel' },
    { text: 'Sim', onPress: () => deletar(item.id, eventos, setEventos) },
    ],
    { cancelable: true }
    );
   }