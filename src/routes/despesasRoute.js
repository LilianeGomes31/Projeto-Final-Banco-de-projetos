const controller = require("../controller/despesasController");

const express = require("express");


const router = express.Router();


router.get("/todas", controller.listaTodasAsDespesas);

router.get("/:id", controller.achaDespesaPorId);

router.patch("/:id", controller.atualizaDespesa);

router.post("/add", controller.cadastraNovaDespesa);

router.delete("/:id", controller.deletaDespesa);



module.exports = router;