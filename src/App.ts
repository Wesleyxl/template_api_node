import express from "express";
import cors from "cors";
import path from "path";

import routes from "./routes";
import sequelize from "./database";

class App {
  public express: express.Application;
  private databaseConnection;

  public constructor() {
    this.express = express();

    this.middleware();
    this.database();
    this.routes();
  }

  private middleware() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use("/public", express.static(path.join(__dirname, "public")));
  }

  private database() {
    this.databaseConnection = sequelize;
  }

  private routes() {
    this.express.use(routes);
  }
}

export default new App().express;
