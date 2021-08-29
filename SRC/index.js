const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors')

mongoose.connect('mongodb+srv://jobsnet:gvvgN2BDzzh9Rs1e@cluster0.etsos.mongodb.net/jobsnet?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    //useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('rodando na porta 5000');
});

