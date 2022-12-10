const depositosModel = require("../models/depositosModel");
const projetosModel = require("../models/projetosModel");

const listaTodosDepositos = async (req, res) => {
  try {
    const todosDepositos = await depositosModel.find().populate("projeto");
    res.status(200).json(todosDepositos);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const achaDepositoPorId = async (req, res) => {
  try {
    const achaDeposito = await depositosModel
      .findById(req.params.id)
      .populate("projeto");
    if (achaDeposito == null) {
      res.status(404).json({ message: "Depósito não encontrado" });
    }
    res.status(200).json(achaDeposito);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const cadastraNovoDeposito = async (req, res) => {
  try {
    const {
      projetoId,
      descricao,
      valor_Do_Deposito,
      data_De_Realizacao_Do_Deposito,
    } = req.body;

    if (!projetoId) {
      return res.status(400).json({ message: "Favor inserir id do Projeto." });
    }

    const achaProjeto = await projetosModel.findById(projetoId);

    if (!achaProjeto) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    const novoDeposito = new depositosModel({
      projeto: projetoId,
      descricao,
      valor_Do_Deposito,
      data_De_Realizacao_Do_Deposito,
    });
    const depositoSalvo = await novoDeposito.save();
    res.status(200).json({
      message: "Novo depósito adicionado com sucesso!",
      depositoSalvo: depositoSalvo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const atualizaDeposito = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      projeto: projetoId,
      descricao,
      valor_Do_Deposito,
      data_De_Realizacao_Do_Deposito,
    } = req.body;
    const achaDeposito = await depositosModel.findById(id);
    if (achaDeposito == null) {
      res.status(404).json({ message: "Depósito não encontrado" });
    }

    if (projetoId) {
      const achaDeposito = await projetosModel.findById(projetoId);

      if (achaDeposito == null) {
        return res.status(404).json({ message: "Projeto não encontrado" });
      }
    }
    achaDeposito.descricao = descricao || achaDeposito.descricao;
    achaDeposito.valor_Do_Deposito = valor_Do_Deposito || achaDeposito.valor_Do_Deposito;
    achaDeposito.data_De_Realizacao_Do_Deposito = data_De_Realizacao_Do_Deposito || achaDeposito.data_De_Realizacao_Do_Deposito;
    achaDeposito.projeto = projetoId || achaDeposito.projeto;

    const depositoSalvo = await achaDeposito.save();
    res
      .status(200)
      .json({ message: "Informações de depósito atualizadas com sucesso", depositoSalvo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletaDeposito = async (req, res) => {
  try {
    const { id } = req.params;
    const achaDeposito = await depositosModel.findById(id);

    if (achaDeposito == null) {
      return res
        .status(404)
        .json({ message: `Depósito com ${id} não foi encontrado` });
    }
    await achaDeposito.remove();
    res
      .status(200)
      .json({ message: `Depósito com ${id} foi deletado com sucesso` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  listaTodosDepositos,
  achaDepositoPorId,
  atualizaDeposito,
  cadastraNovoDeposito,
  deletaDeposito,
};