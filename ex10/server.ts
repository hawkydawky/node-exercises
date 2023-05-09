import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response) => res.send("hello world"));

const port = 3000;

app.listen(port, () => console.log(`port ${port} is being listened`))
