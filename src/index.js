const express = require('express');
const path    = require('path');
const app     = express();

const chalk = require('chalk');

// --- settings
require('dotenv').config({path: './src/.env'});

// --- middlewares
app.use(require('morgan')('dev'));
app.use(express.json());

// --- routes

// --- api

// --- default
app.use('/static', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
    next('404!');
})

// --- server init
const server = app.listen(
    process.env.APP_PORT,
    process.env.APP_ADDRESS,
    ()=>{
        console.clear();
        console.log(chalk.green('SERVIDOR iniciado:'), `http://${server.address().address}:${server.address().port}`);
    }
);