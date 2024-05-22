import { Router } from "express";
import {
  getAppointments,
  getAppointmentById,
} from "../controllers/appointmentsController";

const router = Router();

router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

export default router;
