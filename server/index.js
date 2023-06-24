//import express from 'express';
//import bodyParser from 'body-parser';

//import cors from 'cors';

import Routes from './routes/route.js';
import Connection from './database/db.js';

const cors = require('cors')
const express = require('express')
const app = express();
const bodyParser = require("body-parser")
require('dotenv').config()
import {startServer} from './server'
startServer()
//dotenv.config();

// To handle HTTP POST requests in Express.js version 4 and above, 
//installing body-parser then using it
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const RECIPE_TITLE = process.env.DB_TITLE;
const INGREDIENTS = process.env.DB_INGREDIENTS;

const PORT = '5000';

Connection(RECIPE_TITLE, INGREDIENTS);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));