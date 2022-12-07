const mongoose = require("mongoose");

const despesaSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    nome_Da_Despesa: {
      type: String,
      required: true,
      unique: true,
    },
    valor_Da_Despesa: {
      type: Number,
      required: true,
    },
    data_De_Realizacao_Da_Despesa: {
      type: String,
      required: true,
    },
    tipo_De_Despesa: {
      type: [String],
      required: true,
    },
    justificativa: String,

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

const Model = mongoose.model("Despesa", despesaSchema);

module.exports = Model;
