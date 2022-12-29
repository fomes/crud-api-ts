import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { getUsersRouter } from "./routes/getUsers";
import { postUserRouter } from "./routes/postUsers";
import { deleteUserRouter } from "./routes/deleteUser";
import { editUserRouter } from "./routes/editUser";
import { Pool } from "pg";
import { helloRouter } from "./routes/hello";

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || "5432"),
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};

connectToDB();

const port = process.env.PORT || 3333;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(getUsersRouter);
app.use(postUserRouter);
app.use(deleteUserRouter);
app.use(editUserRouter);
app.use(helloRouter);

app.listen(port, () => {
  console.log("Online...");
});
