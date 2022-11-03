import "dotenv/config";
import express, { response }  from "express";
import { Server } from "socket.io";
import { router } from "./routes/router";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors())

const serverHttp  = http.createServer(app);
const io = new Server(serverHttp, {
    cors: {
        origin: "*",
    }
});



app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.use(express.json());
app.use(router);

app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
});



export { serverHttp, io }