const usuarios = require("../models/usuariosModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const criaUsuario = (req, res) => {
  const passwordWithHash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = passwordWithHash;
  const usuario = new usuarios(req.body);
  usuario.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
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

const usuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const achaUsuario = await usuarios.findById(id);
    if (!achaUsuario.length) {
      return res.status(404).json({ message: "Id não encontrado" });
    }
    res.status(200).json(achaUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = (req, res) => {
  usuarios.findOne({ email: req.body.email }, function (error, usuario) {
    if (error) {
      return res.status(500).send({ message: "Header não encontrado" });
    }
    if (!usuario) {
      return res
        .status(404)
        .send(`Não existe usuário cadastrado com o email: ${email}`);
    }
    const validacaoDeSenha = bcrypt.compareSync(req.body.password, usuario.password);
    if (!validacaoDeSenha) {
      return res.status(403).send("Senha incorreta.");
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const deletaUsuario = async (req, res) => {
  try {
    const authHeader = req.get("Autorizacao");
    if (!authHeader) {
      return res.status(401).send("Voce precisa de autorizacao");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado");
      }
      const { id } = req.params;
      await usuarios.findByIdAndDelete(id);
      const message = `Usuário com ID ${id} foi deletado com sucesso`;
      res.status(200).json({ message });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  criaUsuario,
  listaUsuarios,
  usuarioPorId,
  login,
  deletaUsuario,
};