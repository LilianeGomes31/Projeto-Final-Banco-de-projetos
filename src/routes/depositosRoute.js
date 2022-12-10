const controller = require("../controller/depositosController");

const express = require("express");


const router = express.Router();



router.get("/todos", controller.listaTodosDepositos);

router.post("/add", controller.cadastraNovoDeposito);

router.delete("/:id", controller.deletaDeposito);

router.get("/:id", controller.achaDepositoPorId);

router.patch("/:id", controller.atualizaDeposito);



module.exports = router;