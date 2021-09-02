var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var historicoSchema = new Schema({
    entrada: String,
    saida: String,
    permissao: String,
    capPlaca: String,
  }, { versionKey: false })
module.exports = mongoose.model("Historico", historicoSchema)