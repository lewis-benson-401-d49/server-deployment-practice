'use strict';
// require('dotenv').config();
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const PORT = process.env.PORT || 3002;


// app.use(cors());


// app.get('/', (req, res, next)=>{
//   res.status(200).send('Hello World');
// });

// app.listen(PORT, ()=> console.log(`listening on port: ${PORT}`));

const server = require('./server');

server.start();

