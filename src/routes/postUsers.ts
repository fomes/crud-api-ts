import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postUserRouter = Router();

postUserRouter.post("/users/new", async (req, res) => {
  const { firstName, lastName, gender, address, birthDate } = req.body;

  await prisma.user.create({
    data: {
      firstName,
      lastName,
      gender,
      address,
      birthDate,
    },
  });

  return res.status(201).send({ message: "User successfuly created!" });
});
