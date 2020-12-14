const express = require('express');
const app = express();

const people = require('./people-rotes');


app.get('/nome/:name', (req,res)=>{
    let name = req.params.name;
    res.send(`Ola ${name}`);
})

/** Importante usar o 'use' */
app.use('/people', people);

app.listen(5050, ()=>{
    console.log('Server active');
})