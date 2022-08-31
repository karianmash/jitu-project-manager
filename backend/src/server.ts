import express, { Request, Response, json } from "express";
import dotenv from "dotenv";
import cors from "cors";
// Import routes
import usersRoutes from "./Routes/users";
import projectsRoutes from "./Routes/projects";

dotenv.config();
const app = express();

app.use(json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json("Welcome to TheJitu.com");
});
app.use("/api/users", usersRoutes);
app.use("/api/projects", projectsRoutes);

// Handle requests that cross past the above request handlers
app.get("*", (_req: Request, res: Response): void => {
  res.status(404).json("Invalid URL!!!");
});

// get port number
const port: number | string = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
