const controller = require("../controller/usuariosController");
const express = require("express");
const router = express.Router();

router.post("/", controller.criaUsuario);
router.get("/usuarios/", controller.listaUsuarios);
router.post("/usuario/login/:id", controller.login);
router.delete("/usuario/config/:id", controller.deletaUsuario);

module.exports = router;