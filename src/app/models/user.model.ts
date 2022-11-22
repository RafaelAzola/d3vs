export interface User{
  id: number;
  discriminacao: string;
  email: string;
  senha: string;
  interquali?: string [];
  nome: string;
  cpf: string;
  foto?: string;
  nascimento: string;
  descricao: string;
  googleauth?: string;
}
