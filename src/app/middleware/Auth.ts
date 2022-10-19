import { Request, Response, NextFunction } from "express";
import authConfig from "@config/auth";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  // verify if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token is required",
    });
  }

  jwt.verify(token, authConfig.jwt_secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }

    // saving data on cache
    res.locals.auth_data = decoded;

    return next();
  });
};

export default auth;
