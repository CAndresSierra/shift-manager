import { Router } from "express";
import {
  getUsers,
  getUserById,
  resgiterUser,
  loginUser,
} from "../controllers/usersController";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/register", resgiterUser);

router.post("/login", loginUser);

export default router;
