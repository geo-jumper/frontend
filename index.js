'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
// const favicon = require('serve-favicon');

// // Serve favicon
// app.use(favicon(`${__dirname}/src/images/favicon.ico`));

// Static mounts
app.use(express.static(`${__dirname}/build`));

// Serve index.html
app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is up on PORT ${process.env.PORT}`);
});