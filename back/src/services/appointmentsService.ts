import IAppointmentDto from "../dto/IAppointmentDto";
import { Appointment } from "../entities/Appointment";
import appointmentRepository from "../repositories/appointmentRepository";
import userRepository from "../repositories/userRepository";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await appointmentRepository.find();
  return appointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const appointment = await appointmentRepository.findOne({
    where: { id },
    relations: {
      user: true,
    },
  });
  return appointment;
};

export const createAppointmentService = async (
  appointmentData: IAppointmentDto
): Promise<Appointment> => {
  const newAppointment = await appointmentRepository.create(appointmentData);
  await appointmentRepository.save(newAppointment);

  const user = await userRepository.findOneBy({
    id: appointmentData.userId,
  });

  if (user) {
    newAppointment.user = user;
    appointmentRepository.save(newAppointment);
  }

  return newAppointment;
};

export const cancelAppointmentService = async (
  id: number
): Promise<Appointment | null> => {
  const appointmentReposity = await appointmentRepository;
  const cancelAppointment = await appointmentReposity.findOneBy({ id });

  if (cancelAppointment) {
    cancelAppointment.status = "cancelled";
  }

  appointmentReposity.save(cancelAppointment!);

  return cancelAppointment;
};
