import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOSTDB,
  port: 5432,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASENAME,
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});
