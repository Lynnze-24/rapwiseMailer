const express = require('express');
const path = require('path');
const cors = require('cors');

const mailRouter = require('./routes/mail.router');

const app = express();

const PORT = 3000;

app.use(
  cors({
    origin: [
      'http://localhost:5500',
      'http://localhost:3000',
      'https://rapwise.netlify.app',
    ],
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

app.use('/mail', mailRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
