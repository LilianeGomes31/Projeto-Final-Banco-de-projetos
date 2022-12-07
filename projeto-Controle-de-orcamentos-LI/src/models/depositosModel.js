const mongoose = require("mongoose");

const depositoSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    descricao: {
      type: String,
      required: true,
    },
    valor_Do_Deposito: {
      type: Number,
      required: true,
    },
    data_De_Realizacao_Do_Deposito: {
      type: String,
      required: true,
    },
      projeto: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Projeto",
    },
  },

  {
    timestamp: true,
  }
);

const Model = mongoose.model("Deposito", depositoSchema);

module.exports = Model;