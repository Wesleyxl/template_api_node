import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  username: "root",
  password: null,
  database: "typescript_dev",
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    underscored: true,
    timestamps: true,
  },
});

export default sequelize;
