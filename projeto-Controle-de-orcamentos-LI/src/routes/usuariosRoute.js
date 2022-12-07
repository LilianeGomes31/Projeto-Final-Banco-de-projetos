const controller = require("../controller/usuariosController");
const express = require("express");
const router = express.Router();

router.post("/usuario/", controller.criaUsuario);
router.get("/usuario/", controller.listaUsuarios);
router.get("/usuario/:id", controller.usuarioPorId);
router.post("/usuario/login/:id", controller.login);
router.delete("/usuario/config/:id", controller.deletaUsuario);

module.exports = router;