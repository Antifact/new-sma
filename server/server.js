const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongo.connect(uri);

const connection = mongo.connection;
connection.once('open', () => {
  console.log('MongoDB connected successfully!')
});

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

app.use('/', postsRouter, usersRouter);

app.listen(port, () => {
  // connect to db on server start
  console.log(`Server is running on port ${port}`)
});