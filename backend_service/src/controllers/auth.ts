import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequestsException } from "../exceptions/bad-request";
import { ErrorCodes } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/validation";
import { SignUpSchema } from "../schema/users";

export const SignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    SignUpSchema.parse(req.body)
    const { name, email, password } = req.body;
    let user = await prismaClient.user.findFirst({ where: { email: email } });
    if (user) {
      // throw Error("User already exists.");
      // res.status(409).send("User already exists.");
      next(
        new BadRequestsException(
          "User already exists.",
          ErrorCodes.USER_ALREADY_EXISTS
        )
      );
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
  } catch (error: any) {
    next(new UnprocessableEntity(error?.issues, 'Unprocessable Entity', ErrorCodes.UNPROCESSABLE_ENTITY))
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

// export const me = async (req: Request, res: Response) => {
// res.send(req.user) as any
// };
