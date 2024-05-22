import express from "express";
import { router } from "./routes/indexRoutes";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);
export default server;
