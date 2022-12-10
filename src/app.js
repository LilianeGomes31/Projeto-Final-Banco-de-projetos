require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbconnect");
const projetosRoutes = require("./routes/projetosRoute");
const despesasRoutes = require("./routes/despesasRoute");
const depositosRoutes = require("./routes/depositosRoute");
const usuariosRoutes = require("./routes/usuariosRoute");


const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/bancodeprojetos/projetos",projetosRoutes);
app.use("/bancodeprojetos/projetos/despesas",despesasRoutes);
app.use("/bancodeprojetos/projetos/depositos",depositosRoutes);
app.use("/bancodeprojetos/usuarios",usuariosRoutes);


module.exports = app;