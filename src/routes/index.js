const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        Título: "Reprograma On19 - Projeto Final - Bando de Projetos",
        versão: "1.0.0"
    })
})

module.exports = router