interface IUser {
  id? : string,
  cpf : string,
  nome : string,
  setor : string,
  email : string,
  senha : string
  created_at : Date,
}

export { IUser };