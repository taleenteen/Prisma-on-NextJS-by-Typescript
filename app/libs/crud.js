"use server";
import { PrismaClient } from "@prisma/client";

export const createUser = async () => {
  try {
    const prisma = new PrismaClient();
    const newUser = {
      email: "test@gmail.com",
      name: "Test User 1",
      password: "1234",
    };
    const createdUser = await prisma.user.create({
      data: newUser,
    });
    console.log("Created user: ", createdUser);
  } catch (error) {
    console.log(error);
  }
};
