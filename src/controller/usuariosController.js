const usuarios = require("../models/usuariosModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const criaUsuario = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const usuario = new usuarios(req.body);
  usuario.save(function (err) {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    }
    res.status(201).send(usuario);
  });
};

const listaUsuarios = (req, res) => {
  usuarios.find(function (err, usuarios) {
    if (err) {
      res.status(500).json({ message: error.message });
    }
    res.status(200).send(usuarios);
  });
};

const login = (req, res) => {
  usuarios.findOne({ email: req.body.email }, function (error, usuarios) {
    if (error) {
      return res.status(500).send({ message: "Header não encontrado" });
    }
    if (!usuarios) {
      return res
        .status(404)
        .send(`Não existe usuário cadastrado com o email: ${email}`);
    }
    const validacaoDeSenha = bcrypt.compareSync(req.body.senha, usuarios.senha);
    if (!validacaoDeSenha) {
      return res.status(403).send("Senha incorreta.");
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const deletaUsuario = async (req, res) => {
  try {
      const {
          id
      } = req.params;
      await usuarios.findByIdAndDelete(id);
      const message = `Usuário com Id ${id} foi deletado com sucesso`;
      res.status(200).json({
          message
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: error.message
      });
  };
};

module.exports = {
  criaUsuario,
  listaUsuarios,  
  login,
  deletaUsuario,
};
