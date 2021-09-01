var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var veiculoSchema = new Schema({
    placa: String,
    cor: String,
  }, { versionKey: false })
module.exports = mongoose.model("Veiculos", veiculoSchema)