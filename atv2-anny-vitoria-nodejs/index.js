// O arquivo index.js é o arquivo principal do projeto
import express from "express";

// Iniciando o Express 
const app = express();

import DestinosNacionalController from "./controllers/DestinosNacionalController.js";
import DestinoInternacionalController from "./controllers/DestinoInternacionalController.js";
import RoteirosController from "./controllers/RoteirosController.js";   
import PerfilController from "./controllers/PerfilCrontroller.js";
import ViagemController from "./controllers/ViagemController.js";

import connection from "./config/sequelize-config.js";

import Viagens from "./models/Viagens.js"

app.use(express.urlencoded({extended: false}));

// Realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso!")
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`)
});

// Criando o banco de dados (somente se ainda não existe)
connection.query("CREATE DATABASE IF NOT EXISTS destinos;").then(() => {
    console.log("O banco de dados está criado!");
}).catch((error) =>{
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
});


app.use("/", DestinosNacionalController);
app.use("/", DestinoInternacionalController);
app.use("/", RoteirosController);
app.use("/", PerfilController);
app.use("/", ViagemController);

//CONFIGURANDO O EJS
app.set("view engine", "ejs");
// DEFININDO A PASTA "PUBLIC" COMO DIRETORIO PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// CRIANDO A ROTA PRINCIPAL DO SITE ("/")
app.get("/", function(req, res){ //req- enviar um requisição para o servidor -- res- resposta para o usuario
    // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
    res.render("index")
});


// INICIANDO O SERVIDOR NA PORTA 8081
const port = 8080;
app.listen(port, (error) => {
    if (error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else{
        console.log(`Servidor iniciado com sucesso na porta no endereço: http://localhost:${port}`);
    }
});
