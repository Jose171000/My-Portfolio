const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

const corsOption = {
    origin: "http://localhost:5173",
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
}

server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
server.use(cookieParser())
server.use(morgan("dev"))
server.use(cors(corsOption))



server.use((error, req, res, next)=>{
    const status = error.status || 500;
    const message = error.message || error;
    console.error(error);
    res.status(status).send(message)
})


module.exports = {
    server
}