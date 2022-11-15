export default {
  username: process.env.DB_USERNAME || "wesley",
  password: process.env.DB_PASSWORD || "q1r4w2e3*",
  database: process.env.DB_DATABASE || "typescript_api",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DRIVE || "mysql",
  define: {
    timestamps: true,
    underscored: true,
  },
};
