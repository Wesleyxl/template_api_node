import { Router } from "express";

import AuthController from "@controller/AuthController";

const routes = Router();

routes.get("/test", (request, response) => {
  response.send("ok");
});

// auth routes
routes.post("/auth/login", AuthController.login);

export default routes;
