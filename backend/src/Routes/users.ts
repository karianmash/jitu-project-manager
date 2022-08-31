import { Router } from "express";
import {
  createUser,
  getUserProject,
  loginUser,
} from "../Controller/usersController";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/getUserProject/:userEmail", getUserProject);

export default router;
