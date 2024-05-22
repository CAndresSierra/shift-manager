import ICredentialDto from "../dto/ICredential";
import credentialRepository from "../repositories/credentialRepository";
import { Credential } from "../entities/Credential";

export const createCredentialService = async (params: ICredentialDto) => {
  const newCredential = await credentialRepository.create(params);
  await credentialRepository.save(newCredential);
  return newCredential;
};

export const validateCredential = async (
  params: ICredentialDto
): Promise<Credential> => {
  const { username, password } = params;
  const credential: Credential | null = await credentialRepository.findOneBy({
    username,
  });
  if (!credential) throw Error("El usuario no existe");
  if (password !== credential.password) throw Error("Contraseña incorrecta");

  return credential;
};
