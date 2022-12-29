import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteUserRouter = Router();

deleteUserRouter.delete("/users/del", async (req, res) => {
  const { id } = req.body;

  await prisma.user.delete({
    where: {
      id,
    },
  });

  return res.status(201).send({ message: "User successfuly deleted!" });
});
