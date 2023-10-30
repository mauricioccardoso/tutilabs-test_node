interface IUserResponseDTO {
  id?: string;
  cpf: string;
  nome: string;
  setor: string;
  email: string;
  created_at: Date
}

export { IUserResponseDTO };
