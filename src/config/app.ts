import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  app_name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
  assets: process.env.APP_ASSETS,
};
