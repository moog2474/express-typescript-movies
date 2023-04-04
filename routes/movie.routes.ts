import { getAll, getOne, create } from "../controllers/movies.controller";

import { Router } from "express";


const route = Router();

route.get("/movie", getAll);
route.get("/movie/:_id", getOne)
route.post("/movie", create)

export default route;