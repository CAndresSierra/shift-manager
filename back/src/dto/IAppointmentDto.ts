interface IAppointmentDto {
  date: string;
  time: string;
  status: "active" | "cancelled";
  description: string;
  userId: number;
}

export default IAppointmentDto;
