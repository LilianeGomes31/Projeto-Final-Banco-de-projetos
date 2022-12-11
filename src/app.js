require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const index = require("./routes/index");
const db = require ("./database/dbConnect");
const projetosRoutes = require("./routes/projetosRoute");
const despesasRoutes = require("./routes/despesasRoute");
const depositosRoutes = require("./routes/depositosRoute");
const usuariosRoutes = require("./routes/usuariosRoute");

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {console.log('Conexão com o banco feita com sucesso')});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", index);

app.use("/bancodeprojetos/projetos",projetosRoutes);
app.use("/bancodeprojetos/projetos/despesas",despesasRoutes);
app.use("/bancodeprojetos/projetos/depositos",depositosRoutes);
app.use("/bancodeprojetos/usuarios",usuariosRoutes);


module.exports = app;