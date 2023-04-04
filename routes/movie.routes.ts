import { getAll, getOne } from "../controllers/movies.controller";

import { Router } from "express";

const route = Router();

route.get("/movie", getAll);
route.get("/movie/:_id", getOne)

export default route;