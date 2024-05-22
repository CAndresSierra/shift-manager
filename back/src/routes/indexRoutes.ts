import { Router } from "express";
import userRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";
import appointPostPutRouter from "./appointPostPutRouter";
import "dotenv/config";

export const router = Router();

router.use("/users", userRouter);

router.use("/appointments", appointmentsRouter);

router.use("/appointment", appointPostPutRouter);
