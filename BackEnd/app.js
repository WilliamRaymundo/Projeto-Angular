const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usuario_controller = require('./usuario_controller');
const veiculo_controller = require('./veiculo_controller');
const historico_controller = require('./historico_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/projetoTcc',
    { useNewUrlParser: true });

app.use('/usuarios', usuario_controller);
app.use('/veiculos', veiculo_controller);
app.use('/historico', historico_controller);

app.listen(3000);