const { Person } = require("./person");
const person = new Person("Luiz Vidal");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();
connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
// require("./modules/express");
// https://youtu.be/IOfDoyP1Aq0?t=4303
