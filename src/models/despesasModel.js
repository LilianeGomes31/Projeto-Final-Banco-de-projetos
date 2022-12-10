const mongoose = require("mongoose");

const despesaSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    nome_Da_Despesa: {
      type: String,
      minLenght: 0,
      maxLenght: 100,
      required: true,      
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
      type: String,
      enum: ["Recursos Humanos Direto", "Recursos Humanos Indireto", "Material de Consumo", "Treinamento", "Equipamentos", " Software", "Serviços de Terceiros", "Viagens", "Outros Correlatos", "Livros", "Obras", "Taxa Administrativa", "Reserva de Pesquisa"],
      required: true,
    },
    justificativa: String,

    projeto: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "projeto",
    },
  },

  {
    timestamp: true,
  }
);

const Despesa = mongoose.model("despesa", despesaSchema);

module.exports = Despesa;
