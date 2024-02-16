const express = require('express');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenseRoutes');
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/', expenseRoutes);

app.listen(3000, () => console.log('Server Started'));
