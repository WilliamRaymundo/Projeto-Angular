var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usuarioSchema = new Schema({
    nome: String,
    cpf: String,
    endereco: String,
    telefone: String,
    ofNumber: [Number],
}, { versionKey: false })
module.exports = mongoose.model("Usuario", usuarioSchema)