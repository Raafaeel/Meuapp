export default class Evento {
    id: number | null;
    nome: string;
    data: string;
    descricao: string;
    status: string;
    constructor(id: number | null, nome: string, data: string,
    descricao: string, status: string) {
    this.id = id;
    this.nome = nome;
    this.data = data;
    this.descricao = descricao;
    this.status = status;
    }
   }