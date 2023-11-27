import axios from 'axios';
import Evento from '../Core/evento';

interface ApiResponse {
content: Evento[];
}

let eventosList: Evento[] = [
  new Evento(1, "UPF em Dança",
    "2023-11-27",
    "Evento de dança",
    "PREVISTO",
  ),
  new Evento(2, "UPF na feitech",
    "2023-11-27",
    "Evento de tecnologia",
    "PREVISTO",
  )
]
let proximoId = eventosList.length + 1;

const BASE_URL = 'https://www.eventos.bprates.com.br/';

export const fetchEventos = async (): Promise<Evento[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return eventosList;
  } catch (error) {
    throw new Error('Erro ao buscar eventos');
  }
};

export const atualizarEvento = async (eventoAtualizado: Evento): Promise<Evento> => {
  try {

    // Assuming eventosList is defined somewhere in the scope
    const index = eventosList.findIndex((evento) => evento.id == eventoAtualizado.id);

    if (index !== -1) {
      // Assuming eventosList is mutable
      eventosList[index] = eventoAtualizado;
      return eventoAtualizado;
      
      
    } else {
      throw new Error('Evento não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar evento:", error);
    throw error;
  }

};

export const deleteEvento = async (id: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    eventosList = eventosList.filter((evento) => evento.id !== id);
  } catch (error) {
    console.error("Erro ao excluir evento:", error);
    throw error;
  }
   };

   export const addEvento = async (evento: Evento) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      evento.id = proximoId++;
      eventosList.push(evento);
  
      // Retorna o evento cadastrado
      return evento;
    } catch (error) {
      console.error("Erro ao cadastrar evento:", error);
      throw error;
    }
  };   

