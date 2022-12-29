import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { getUsersRouter } from "./routes/getUsers";
import { postUserRouter } from "./routes/postUsers";
import { deleteUserRouter } from "./routes/deleteUser";
import { editUserRouter } from "./routes/editUser";

const port = process.env.PORT || 3333;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log("Online...");
});

app.use(getUsersRouter);
app.use(postUserRouter);
app.use(deleteUserRouter);
app.use(editUserRouter);
