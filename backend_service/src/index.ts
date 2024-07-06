import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";

const app: Express = express();
app.use(express.json())

app.use("/api", rootRouter);

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.get("/", (req: Request, res: Response) => {
  res.send("Service Running");
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}.`);
});
