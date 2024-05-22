import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getUserByIdService,
  getUserService,
} from "../services/usersService";

import IUserDto from "../dto/IUserDto";
import { validateCredential } from "../services/credentialsService";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUserService();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: "Fallo en la carga de los usuarios" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await getUserByIdService(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

export const resgiterUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password }: IUserDto =
      req.body;
    const newUser = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(404).json({ message: "Datos incorrectos" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credential = await validateCredential({ username, password });
    const user = await findUserByCredentialId(credential.id);

    res.status(200).json({
      login: true,
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      login: false,
      error: error.message,
    });
  }
};
