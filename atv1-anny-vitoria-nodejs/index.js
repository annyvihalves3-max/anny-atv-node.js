// O arquivo index.js é o arquivo principal do projeto
import express from "express";

import DestinosNacionalController from "./controllers/DestinosNacionalController.js";
import DestinoInternacionalController from "./controllers/DestinoInternacionalController.js";
import RoteirosController from "./controllers/RoteirosController.js";   
import PerfilController from "./controllers/PerfilCrontroller.js";

const app = express();

app.use("/", DestinosNacionalController);
app.use("/", DestinoInternacionalController);
app.use("/", RoteirosController);
app.use("/", PerfilController);

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
