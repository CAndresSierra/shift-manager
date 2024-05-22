import { Router } from "express";
import {
  cancelAppointment,
  createAppointment,
} from "../controllers/appointmentsController";

const router = Router();

router.post("/schedule", createAppointment);

router.put("/cancel/:id", cancelAppointment);

export default router;
