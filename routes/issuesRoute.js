import { Router } from "express";

// CONTROLLERS
import { getIssues } from "../controllers/issues.controller.js";

const issuesRoute = Router();

issuesRoute.get('/issues', getIssues);

export default issuesRoute;