import { Router } from "express";
import AuthController from "@controller/AuthController";
import auth from "@middleware/Auth";

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
