interface ICreateUserDTO {
  id?: string;
  cpf: string;
  nome: string;
  setor: string;
  email: string;
  senha: string;
}

export { ICreateUserDTO };
