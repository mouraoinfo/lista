
export class Disciplina {
    codigo: number;
    nome: string;
    descricao: string;
    data: Date;
    isAtiva: boolean;
    tipo: string;
    periodo: string;

    constructor(codigo: number, nome: string,  descricao: string, data: Date, isAtiva: boolean, tipo: string, periodo: string) {
      this.codigo = codigo;
      this.nome = nome;
      this.descricao = descricao;
      this.data = data;
      this.isAtiva = isAtiva;
      this.tipo = tipo;
      this.periodo = periodo;
    }
}
