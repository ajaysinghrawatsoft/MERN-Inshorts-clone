import express from "express";
import cors from "cors";

import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from './routes/route.js';
import BodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json({ extended: true }));



app.use('/', Route);


const PORT = 7000;

Connection();

app.listen(PORT, () => {
    console.log(`Server is running successfull ${PORT}`);
})

DefaultData();
