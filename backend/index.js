const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb+srv://julialuiza:nstl4590@cluster0-monom.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);