const mongoose = require("mongoose");

const projetoSchema = new mongoose.Schema(
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
    despesa: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "despesa",
      default: "Sem despesas vinculadas"
    },

    deposito: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "deposito",
      default: "Sem despesas vinculadas"
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
  {
    timestamps: true,
  },
  {
    versionKey: false,
  }
);

const projetos = mongoose.model("projeto", projetoSchema);

module.exports = projetos;
