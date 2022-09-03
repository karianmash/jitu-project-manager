import { Router } from "express";
import {
  createProject,
  getProjects,
  getUnassignedProjects,
} from "../Controller/projectsController";

const router = Router();

router.post("/create", createProject);
router.get("/getAssignedProjects", getProjects);
router.get("/getUnassignedProjects", getUnassignedProjects);

export default router;
