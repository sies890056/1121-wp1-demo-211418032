import express from 'express';
import logger from 'morgan';
import path from 'path';

import apiCardRouter_32 from "./route/api/apiCardRouter_32.js"
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import db from'./utils/database.js';


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger('dev'));



app.use(express.static('public'));
app.set('view engine','ejs');

//app.use('/', (req,res,next)=>{
//    res.render('index',{title:'Express'});
//});

const port = process.env.PORT || 5000;

app.use('/api/card_32',apiCardRouter_32);


app.listen(port, () => {
 if(process.env.DATABASE ==='SUPABASE'){
    console.log(`Connecting SUPABASE PostgreSQL database ${db.options.database}`);
 }   else{
console.log(`Connecting local PostgreSQL ${db.options.database}`);
}
console.log(`Connecting on port ${port}`);
} );1