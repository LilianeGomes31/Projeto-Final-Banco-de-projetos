const controller = require("../controller/projetosController");

const express = require("express");

const router = express.Router();


router.get("/todos", controller.listaTodosProjetos);

router.get("/", controller.achaProjetoPorempresaFinanciadora);

router.get("/:id", controller.listaProjetosPorId);

router.post("/add", controller.adicionaNovoProjeto);

router.patch("/:id", controller.atualizaProjeto);

router.delete("/:id", controller.deletaProjeto);






module.exports = router;
