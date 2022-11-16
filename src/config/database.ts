import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVE,
  define: {
    timestamps: true,
    underscored: true,
  },
};
