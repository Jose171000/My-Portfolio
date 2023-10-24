const {server} = require("./src/app");
const {sequelize} = require("./src/db");
require("dotenv").config();
const {SERVER_PORT} = process.env;

server.listen(SERVER_PORT, async()=>{
    await sequelize.sync({force:true});
    console.log(`%s listening at ${SERVER_PORT}`);
});