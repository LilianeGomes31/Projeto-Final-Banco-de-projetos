const despesasModel = require("../models/despesasModel");
const projetosModel = require("../models/projetosModel");

const listaTodasAsDespesas = async (req, res) => {
  try {
    const todasAsDespesas = await despesasModel.find().populate("projeto");
    res.status(200).json(todasAsDespesas);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const achaDespesaPorId = async (req, res) => {
  try {
    const achaDespesa = await despesasModel
      .findById(req.params.id)
      .populate("projeto");
    if (achaDespesa == null) {
      res.status(404).json({ message: "Despesa não encontrada" });
    }
    res.status(200).json(achaDespesa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const cadastraNovaDespesa = async (req, res) => {
  try {
    const {
      projetoId,
      nome_Da_Despesa,
      valor_Da_Despesa,
      data_De_Realizacao_Da_Despesa,
      tipo_De_Despesa,
      justificativa,
    } = req.body;

    if (!projetoId) {
      return res.status(400).json({ message: "Favor inserir id do Projeto." });
    }

    const achaProjeto = await projetosModel.findById(projetoId);

    if (!achaProjeto) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    const novaDespesa = new despesasModel({
      projeto: projetoId,
      nome_Da_Despesa,
      valor_Da_Despesa,
      data_De_Realizacao_Da_Despesa,
      tipo_De_Despesa,
      justificativa,
    });
    const despesaSalva = await novaDespesa.save();
    res
      .status(200)
      .json({ message: "Nova despesa adicionada com sucesso!", despesaSalva });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const atualizaDespesa = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      projeto: projetoId,
      nome_Da_Despesa,
      valor_Da_Despesa,
      data_De_Realizacao_Da_Despesa,
      tipo_De_Despesa,
      justificativa,
    } = req.body;

    const achaDespesa = await despesasModel.findById(id);
    if (achaDespesa == null) {
      res.status(404).json({ message: "Despesa não encontrada" });
    }

    if (projetoId) {
      const achaProjeto = await projetosModel.findById(projetoId);

      if (achaProjeto == null) {
        return res.status(404).json({ message: "Projeto não encontrado" });
      }
    }
    achaDespesa.nome_Da_Despesa =
      nome_Da_Despesa || achaDespesa.nome_Da_Despesa;
    achaDespesa.valor_Da_Despesa =
      valor_Da_Despesa || achaDespesa.valor_Da_Despesa;
    achaDespesa.tipo_De_Despesa =
      tipo_De_Despesa || achaDespesa.tipo_De_Despesa;
    achaDespesa.data_De_Realizacao_Da_Despesa =
      data_De_Realizacao_Da_Despesa ||
      achaDespesa.data_De_Realizacao_Da_Despesa;
    achaDespesa.projeto = projetoId || achaDespesa.projeto;

    const despesaSalva = await achaDespesa.save();
    res
      .status(200)
      .json({ message: "Despesa atualizada com sucesso", despesaSalva });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletaDespesa = async (req, res) => {
  try {
    const { id } = req.params;
    const achaDespesa = await despesasModel.findById(id);

    if (achaDespesa == null) {
      return res
        .status(404)
        .json({ message: `Despesa com ${id} não foi encontrada` });
    }
    await achaDespesa.remove();
    res
      .status(200)
      .json({ message: `Despesa com id ${id} foi deletada com sucesso` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listaTodasAsDespesas,
  achaDespesaPorId,
  atualizaDespesa,
  cadastraNovaDespesa,
  deletaDespesa,
};
