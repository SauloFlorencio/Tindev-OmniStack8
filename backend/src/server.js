const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

const routes = require ('./routes');

const server = express();

mongoose.connect('mongodb+srv://saulo:1710199712@cluster0-hzqbm.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);