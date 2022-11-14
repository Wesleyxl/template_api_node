import { Sequelize } from "sequelize";


const sequelize = new Sequelize({
  username: "wesley",
  password: "q1r4w2e3*",
  database: "typescript_api",
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    underscored: true,
    timestamps: true,
  },
});

export default sequelize;
