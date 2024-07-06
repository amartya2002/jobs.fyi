import { Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";

export const SignUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email: email } });
  if (user) {
    // throw Error("User already exists.");
    res.status(409).send("User already exists.");
  } else {
    user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashSync(password, 10),
      },
    });
    res.json(user);
  }
};

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email: email } });
  if (!user) {
    // throw Error("User already exists.");
    res.status(404).send("User not found.");
  } else {
    if (!compareSync(password, user.password)) {
      res.status(401).send("Incorrect Password.");
    } else {
      const token = jwt.sign(
        {
          userId: user.id,
        },
        JWT_SECRET
      );
      res.json({ user, token });
    }
  }
};
