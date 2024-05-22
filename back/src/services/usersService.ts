import { AppDataSource } from "../config/data-source";
import IUserDto from "../dto/IUserDto";
import { User } from "../entities/User";
import userRepository from "../repositories/userRepository";
import { createCredentialService } from "./credentialsService";

export const getUserService = async (): Promise<User[]> => {
  const users = await userRepository.find();
  return users;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const idUser = await userRepository.findOne({
    where: { id },
    relations: {
      appointments: true,
    },
  });
  return idUser;
};

export const createUserService = async (userData: IUserDto): Promise<User> => {
  const newUser = await userRepository.create(userData);
  await userRepository.save(newUser);

  const newCredential = await createCredentialService({
    username: userData.username,
    password: userData.password,
  });

  if (newCredential) {
    newUser.credential = newCredential;
    userRepository.save(newUser);
  }

  return newUser;
};

export const findUserByCredentialId = async (
  credentialId: number
): Promise<User | null> => {
  const user: User | null = await userRepository.findOneBy({
    credential: {
      id: credentialId,
    },
  });
  return user;
};
