import { Request, Response } from "express";
import {
  getAppointmentByIdService,
  getAppointmentsService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentsService";
import IAppointmentDto from "../dto/IAppointmentDto";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await getAppointmentsService();
    res.status(200).json(appointments);
  } catch (error) {
    res
      .status(404)
      .json({ message: "No se pudieron encontrar los appointments" });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const appointmentId = await getAppointmentByIdService(id);
    res.status(200).json(appointmentId);
  } catch (error) {
    res.status(404).json({ message: "El appointment no fue encontrado" });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { date, time, status, description, userId }: IAppointmentDto =
      req.body;

    const newAppointment = await createAppointmentService({
      date,
      time,
      status,
      description,
      userId,
    });

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: "Datos incorrectos" });
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const appointmentCancel = await cancelAppointmentService(id);
    res.status(200).json(appointmentCancel);
  } catch (error) {
    res.status(404).json({ message: "No se pudo cancelar el appointment" });
  }
};
