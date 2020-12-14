const express = require('express');
const route = express.Router();

route.get('/', (req, res)=>{
    res.send('Entramos no route people');
})

module.exports = route; 