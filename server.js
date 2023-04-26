import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import  connection  from './database/db.js';
import router from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extented:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);


const PORT = process.env.PORT || 8081;

const URL = process.env.DATABASE_URI;
connection(URL);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});