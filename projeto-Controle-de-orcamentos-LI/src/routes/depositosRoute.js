const controller = require("../controller/depositosController");

const express = require("express");


const router = express.Router();


router.get("/todos", controller.listaTodosDepositos);

router.get("/", controller.achaDepositoPorId);

router.get("/:id", controller.achaDepositoPorDescricao);

router.patch("/:id", controller.atualizaDeposito);

router.post("/add", controller.cadastraNovoDeposito);

router.delete("/:id", controller.deletaDeposito);



module.exports = router;