const mongoose = require("mongoose");

const projetoSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    nome_Do_Projeto: {
      type: String,
      required: true,
      unique: true,
    },
    empresa_Financiadora: {
      type: String,
      required: true,
    },
    data_De_Inicio_Do_Projeto: {
      type: String,
      required: true,
    },
    data_De_Termino_Do_Projeto: {
      type: String,
      required: true,
    },
    valor_Total_Do_Projeto: {
      type: Number,
      required: true,
    },
    saldo_Do_Projeto: {
      type: Number,
      valor: 0,
      required: true,
    },
    descricao_Do_Projeto: {
      type: String,
      minLenght: 0,
      maxLenght: 1000,
      default: "no description",
    },
  },
 
);

const Model = mongoose.model("Projeto", projetoSchema);

module.exports = Model;
