import { Router } from "express";

// middleware
import auth from "@middleware/Auth";

// controllers
import AuthController from "@controller/AuthController";

const routes = Router();

// auth routes
routes.post("/auth/login", AuthController.login);
routes.post("/auth/register", AuthController.register);
routes.get("/auth/me", auth, AuthController.me);

// test private route
routes.get("/test", (req, res) => {
  return res.json({
    success: true,
    data: "ok",
  });
});
routes.get("/test/private", auth, (req, res) => {
  return res.json({
    success: true,
    data: "ok",
  });
});

export default routes;
