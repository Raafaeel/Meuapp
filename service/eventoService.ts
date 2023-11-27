import axios from 'axios';
import Evento from '../Core/evento';

interface ApiResponse {
content: Evento[];
}
const BASE_URL = 'https://www.eventos.bprates.com.br/';
export const fetchEventos = async (): Promise<Evento[]> => {
try {
 const response = await axios.get<ApiResponse>(`${BASE_URL}/eventos`);
 return response.data.content;
 } catch (error) {
 throw new Error('Erro ao buscar eventos');
 }
};

export const atualizarEvento = async (evento: Evento): Promise<void> => {
    try {
        await axios.put(`${BASE_URL}/eventos/${evento.id}`, evento);
    } catch (error) {
        throw new Error('Erro ao atualizar o evento');
    }
   };

export const deleteEvento = async (id: number) => {
    try {
    await axios.delete(`${BASE_URL}/eventos/${id}`);
    } catch (error) {
    throw new Error('Erro ao deletar evento');
    }
   };

   export const addEvento = async (evento: Evento) => {
    try {

    // Criação (método POST)
    const response = await axios.post(`${BASE_URL}/eventos`, evento);
    console.log('Evento criado:', response.data);
    } catch (error) {
      console.error('Erro ao criar/atualizar evento:', error);
      throw new Error('Erro ao criar/atualizar evento');
    }
  };   

