import Controller from "./Controller";
import { Request, Response } from "express";
import AuthService from "@service/AuthService";

class AuthController extends Controller {
  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const registerResponse = await AuthService.login(email, password);
      if (registerResponse.success) {
        return res.json({
          success: true,
          data: registerResponse.data,
        });
      }

      return res.status(401).json({
        success: false,
        message: registerResponse.message,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  }
}

export default new AuthController();
