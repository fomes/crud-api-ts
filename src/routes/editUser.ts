import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const editUserRouter = Router();

editUserRouter.put("/users/edit", async (req, res) => {
  const { id, firstName, lastName, gender, address, birthDate } = req.body;

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      gender,
      address,
      birthDate,
    },
  });

  return res.status(201).send({ message: "User successfuly edited!" });
});
