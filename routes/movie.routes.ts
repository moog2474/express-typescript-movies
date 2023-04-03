import { getAll } from "../controllers/movies.controller";

import { Router } from "express";

const route = Router();

route.get("/movie", getAll);

export default route;