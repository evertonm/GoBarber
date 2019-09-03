require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
