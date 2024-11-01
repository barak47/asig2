const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);

mongoose.connect('mongodb://db:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(4000, () => console.log("Backend running on port 4000")))
  .catch(err => console.error("Database connection error:", err));
