const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', foodRouter);


mongoose.connect(`mongodb+srv://userApp:8PbEDhPg9Gzitvjs@atividadeweb.xvohx82.mongodb.net`,{
  retryWrites: true, 
  w: 'majority', 
  appName: 'atividadeweb'
});


app.listen(PORT, ()=>{
  console.log(`Servidor iniciado na porta ${PORT}`);
});