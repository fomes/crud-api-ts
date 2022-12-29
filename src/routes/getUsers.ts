import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsersRouter = Router();

getUsersRouter.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      gender: true,
      address: true,
      birthDate: true,
    },
  });

  res.status(200).send({ users });
});
