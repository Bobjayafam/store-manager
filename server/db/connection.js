import { Pool } from "pg";
import UserModel from "./UserModel";
import bcrypt from "bcrypt";

const connectionString = {
  user: "bobjayafam",
  host: "localhost",
  database: "storemanager",
  password: null,
  port: 5432
};

const pool = new Pool(connectionString);

const username = "Jude";
const password = bcrypt.hashSync("123456", 10);
const role = "admin";

pool
  .connect()
  .then(client => {
    return client.query(UserModel.createTable).then(result => {
      pool
        .query("INSERT INTO users VALUES (default, $1, $2, $3)", [
          username,
          password,
          role
        ])
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });

      client.release();
    });
  })
  .catch(err => {
    console.log(err.stack);
  });

export default {
  query: (text, params) => pool.query(text, params)
};
