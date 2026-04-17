import 'reflect-metadata'
import express, {Request, Response} from "express";
import {router} from "./routes";
import { AppDataSource } from './database';

const server = express();

try {
    AppDataSource.initialize()
    console.log("Data Source has been initialized!")
} catch (error) {
    console.error("Error during Data Source initialization", error)
}

server.use(express.json())
server.use(router)

server.get("/", (request: Request, response: Response) => {
    return response.status(200).json({"message": "Hello World!"});
})

server.listen(5000, () => console.log("Server started"));