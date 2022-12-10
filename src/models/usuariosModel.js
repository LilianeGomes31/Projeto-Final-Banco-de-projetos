const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema(
  {
    nomeUsuario: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    },
    funcao: {
      type: String,
      required: true,
      default: "Não informado",
    },
  },
  { versioKey: false }
);

const usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = usuario;
