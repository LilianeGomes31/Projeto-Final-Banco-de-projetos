const projetosModel = require("../models/projetosModel");

const listaTodosProjetos = async (req, res) => {
  try {
    const todosProjetos = await projetosModel.find();
    res.status(200).json(todosProjetos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const listaProjetosPorId = async (req, res) => {
  try {
    const achaProjeto = await projetosModel.findById(req.params.id);
    res.status(200).json(achaProjeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const adicionaNovoProjeto = async (req, res) => {
  try {
    const {
      nome_Do_Projeto,
      empresa_Financiadora,
      data_De_Inicio_Do_Projeto,
      data_De_Termino_Do_Projeto,
      valor_Total_Do_Projeto,
      saldo_Do_Projeto,
      descricao_Do_Projeto
} = req.body;
    const NovoProjeto = new projetosModel({
        nome_Do_Projeto,
        empresa_Financiadora,
        data_De_Inicio_Do_Projeto,
        data_De_Termino_Do_Projeto,
        valor_Total_Do_Projeto,
        saldo_Do_Projeto,
        descricao_Do_Projeto
    });

    const projetoSalvo = await NovoProjeto.save();
    res
      .status(200)
      .json({ message: "Novo projeto Adicionado com sucesso", projetoSalvo });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

const atualizaProjeto = async (req, res) => {
  try {
    const {
        nome_Do_Projeto,
        empresa_Financiadora,
        data_De_Inicio_Do_Projeto,
        data_De_Termino_Do_Projeto,
        valor_Total_Do_Projeto,
        saldo_Do_Projeto,
        descricao_Do_Projeto
    } = req.body;
    const atualizaProjeto = await projetosModel.findByIdAndUpdate(req.params.id, {
        nome_Do_Projeto,
        empresa_Financiadora,
        data_De_Inicio_Do_Projeto,
        data_De_Termino_Do_Projeto,
        valor_Total_Do_Projeto,
        saldo_Do_Projeto,
        descricao_Do_Projeto
    });

    res
      .status(200)
      .json({ message: "Projeto atualizado com sucesso", atualizaProjeto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deletaProjeto = async (req, res) => {
  try {
    const { id } = req.params;
    const deletaProjeto = await projetosModel.findByIdAndDelete(id);
    const message = `Cadastro do ${deletaProjeto.nome_Do_Projeto} deletado com sucesso`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


const achaProjetoPorempresaFinanciadora = async (req, res) => {
  try {
    const achaprojeto = await projetosModel.find({ empresa_Financiadora: req.query.empresa_Financiadora }) ;
    res.status(200).json(achaprojeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
listaTodosProjetos,
listaProjetosPorId,
adicionaNovoProjeto,
atualizaProjeto,
deletaProjeto,
achaProjetoPorempresaFinanciadora
};
