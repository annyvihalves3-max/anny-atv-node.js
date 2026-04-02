// O arquivo index.js é o arquivo principal do projeto

// IMPORTANDO O MÓDULO DO "EXPRESS"
const express = require("express");

// CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

// DEFININDO A PASTA "PUBLIC" COMO DIRETORIO PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// CRIANDO A ROTA PRINCIPAL DO SITE ("/")
app.get("/", function(req, res){ //req- enviar um requisição para o servidor -- res- resposta para o usuario
    // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
    res.render("index")
});

// CRIANDO A ROTA DE PERFIL DE USUARIO
app.get("/perfil", function(req,res){
    // res.send("<h2>Bem-vindo ao seu perfil!</h2>");
    res.render("perfil");
});

//ROTA DE CLIENTES
app.get("/clientes", function(req,res){
    const listarClientes = ["Anny","Carol", "Natasha","Maria","Elias"];
    res.render("clientes",{
        listarClientes : listarClientes,
    });
});

//ROTA DE CLIENTES - COM PARAMETROS
app.get("/clientes/:cliente", function(req,res){
    const cliente = req.params.cliente;

    res.render("detalhesCliente",{
        cliente : cliente,
    });
});


app.set('view engine', 'ejs');
app.use(express.static('public'));

// Destinos do Brasil
const destinosNacionais = [
    { 
        nome: "Fernando de Noronha", 
        local: "Fernando de Noronha - PE", 
        regiao: "Nordeste", 
        img: "../imgs/paisagem.jpg",
        descricao: "Mergulho em águas cristalinas e as praias mais bonitas do mundo." 
    },
    { 
        nome: "Ouro Preto", 
        local: "Ouro Preto - MG", 
        regiao: "Sudeste", 
        img: "../imgs/ouro_preto.png",
        descricao: "Relíquias do barroco mineiro, ladeiras históricas e gastronomia única." 
    },
    { 
        nome: "Chapada Diamantina", 
        local: "Chapada Diamantina - BA", 
        regiao: "Nordeste", 
        img: "../imgs/chapada.jpg",
        descricao: "Cachoeiras gigantes, grutas azuladas e trilhas épicas no coração da Bahia." 
    },
    { 
        nome: "Lençóis Maranhenses", 
        local: "Barreirinhas - MA", 
        regiao: "Nordeste", 
        img: "../imgs/lencois.png",
        descricao: "Um deserto de dunas infinitas com lagoas de água doce cristalina." 
    },
    { 
        nome: "Florianópolis", 
        local: "Florianópolis - SC", 
        regiao: "Sul", 
        img: "../imgs/floripa.jpg",
        descricao: "A Ilha da Magia: mix perfeito de surf, trilhas e vilas de pescadores." 
    },
    { 
        nome: "Rio de Janeiro", 
        local: "Rio de Janeiro - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/rio-janeiro.jpg",
        descricao: "A Cidade Maravilhosa: do Cristo Redentor às trilhas do Morro da Urca." 
    },
    { 
        nome: "Alter do Chão", 
        local: "Santarém - PA", 
        regiao: "Norte", 
        img: "../imgs/alter.jpg",
        descricao: "O 'Caribe Amazônico' com praias de rio que surgem na seca da floresta." 
    },
    { 
        nome: "Paraty", 
        local: "Paraty - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/paraty.jpg",
        descricao: "Casarões coloniais, barcos coloridos e o encontro da serra com o mar." 
    },
    { 
        nome: "Arraial do Cabo", 
        local: "Arraial do Cabo - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/arraial.jpg",
        descricao: "O 'Caribe Brasileiro': areias brancas e um mar azul impossível." 
    },
    { 
        nome: "Jalapão", 
        local: "Mateiros - TO", 
        regiao: "Norte", 
        img: "../imgs/jalapao.webp",
        descricao: "Fervedouros onde é impossível afundar e dunas de areia alaranjada." 
    },
    { 
        nome: "Curitiba", 
        local: "Curitiba - PR", 
        regiao: "Sul", 
        img: "../imgs/curitiba.jpg",
        descricao: "Parques impecáveis, jardins botânicos e o charme do passeio de trem." 
    },
       { 
        nome: "Chapada dos Veadeiros", 
        local: "Alto Paraíso - GO", 
        regiao: "Centro-Oeste", 
        img: "../imgs/veadeiros.webp",
        descricao: "Canyons, cristais e cachoeiras místicas no cerrado brasileiro." 
    },
    { 
        nome: "Bento Gonçalves", 
        local: "Bento Gonçalves - RS", 
        regiao: "Sul", 
        img: "../imgs/bento.jpg",
        descricao: "O coração da Serra Gaúcha, famoso pelos vinhedos e cultura italiana." 
    },
    { 
        nome: "Ilha Grande", 
        local: "Angra dos Reis - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/ilha_grande.jpg",
        descricao: "Santuário ecológico sem carros, repleto de trilhas e praias selvagens." 
    },
    { 
        nome: "Monte Roraima", 
        local: "Uiramutã - RR", 
        regiao: "Norte", 
        img: "../imgs/monte.avif",
        descricao: "Um dos pontos mais antigos da Terra, com paredões de 400m e mistérios." 
    },
    { 
        nome: "Capitólio", 
        local: "Capitólio - MG", 
        regiao: "Sudeste", 
        img: "../imgs/capitolio.jpg",
        descricao: "O Mar de Minas: cânions imensos e águas esverdeadas de tirar o fôlego." 
    },
    { 
        nome: "Bonito", 
        local: "Bonito - MS", 
        regiao: "Centro-Oeste", 
        img: "../imgs/bonito.jpg",
        descricao: "Flutuação em rios transparentes e cavernas com lagos azuis profundos." 
    },
    { 
        nome: "Gramado", 
        local: "Gramado - RS", 
        regiao: "Sul", 
        img: "../imgs/gramado.jpg",
        descricao: "Arquitetura europeia, gastronomia serrana e o charme do inverno gaúcho." 
    },
    { 
        nome: "Pipa", 
        local: "Tibau do Sul - RN", 
        regiao: "Nordeste", 
        img: "../imgs/pipa.jpeg",
        descricao: "Falésias coloridas, golfinhos e uma vida noturna vibrante e charmosa." 
    },
    { 
        nome: "Nobres", 
        local: "Nobres - MT", 
        regiao: "Centro-Oeste", 
        img: "../imgs/nobres.jpg",
        descricao: "Rios de água azul turquesa repletos de peixes e aquários naturais." 
    },
    { 
        nome: "Ubatuba", 
        local: "Ubatuba - SP", 
        regiao: "Sudeste", 
        img: "../imgs/ubatuba.jpg",
        descricao: "Mais de 100 praias, ilhas paradisíacas e o melhor do surfe paulista." 
    },
    { 
        nome: "São Miguel dos Milagres", 
        local: "Passo de Camaragibe - AL", 
        regiao: "Nordeste", 
        img: "../imgs/saomiguel.webp",
        descricao: "Piscinas naturais e praias desertas em uma rota ecológica preservada." 
    },
    { 
        nome: "Porto de Galinhas", 
        local: "Ipojuca - PE", 
        regiao: "Nordeste", 
        img: "../imgs/porto-galinha.jpg",
        descricao: "Piscinas naturais mornas e jangadas coloridas em um mar de tons azuis." 
    },
    { 
        nome: "Foz do Iguaçu", 
        local: "Foz do Iguaçu - PR", 
        regiao: "Sul", 
        img: "../imgs/foz.webp",
        descricao: "A força da natureza nas Cataratas e o espetáculo do Marco das Três Fronteiras." 
    },
    { 
        nome: "Jericoacoara", 
        local: "Jijoca de Jericoacoara - CE", 
        regiao: "Nordeste", 
        img: "../imgs/jeri.webp",
        descricao: "Redes na água, dunas gigantes e o pôr do sol mais famoso do Brasil." 
    },
    { 
        nome: "Ilhabela", 
        local: "Ilhabela - SP", 
        regiao: "Sudeste", 
        img: "../imgs/ilhabela.jpg",
        descricao: "A capital da vela: praias selvagens, dezenas de cachoeiras e trilhas na Mata Atlântica." 
    },
    { 
        nome: "Trancoso", 
        local: "Porto Seguro - BA", 
        regiao: "Nordeste", 
        img: "../imgs/trancoso.jpg",
        descricao: "O charme do Quadrado, falésias coloridas e o mar calmo do sul da Bahia." 
    },
    { 
        nome: "São Miguel das Missões", 
        local: "São Miguel - RS", 
        regiao: "Sul", 
        img: "../imgs/missoes.jpg",
        descricao: "Um mergulho na história das missões jesuíticas em um Patrimônio da Humanidade." 
    },
    { 
        nome: "Galinhos", 
        local: "Galinhos - RN", 
        regiao: "Nordeste", 
        img: "../imgs/galinhos.webp",
        descricao: "Uma península isolada com dunas, salinas e um pôr do sol inesquecível no farol." 
    },
    { 
        nome: "Caldas Novas", 
        local: "Caldas Novas - GO", 
        regiao: "Centro-Oeste", 
        img: "caldas.jpg",
        descricao: "O maior manancial de águas termais do mundo, com parques aquáticos e relaxamento." 
    },
    { 
        nome: "São Bento do Sapucaí", 
        local: "São Bento - SP", 
        regiao: "Sudeste", 
        img: "pedradobau.jpg",
        descricao: "Aos pés da Pedra do Baú, o destino perfeito para escalada, trilhas e sossego na serra." 
    },
    { 
        nome: "Boipeba", 
        local: "Cairu - BA", 
        regiao: "Nordeste", 
        img: "boipeba.jpg",
        descricao: "Paz absoluta em uma ilha sem carros, com piscinas naturais e recifes de corais." 
    },
    { 
        nome: "Cânion do Xingó", 
        local: "Canindé de São Francisco - SE", 
        regiao: "Nordeste", 
        img: "xingo.jpg",
        descricao: "Navegue pelo Rio São Francisco entre imensos paredões de rocha alaranjada." 
    }
];

app.get("/nacional", function(req, res) {
    res.render("destinos", {
        titulo: "Descubra os Melhores Destinos do Brasil",
        lista: destinosNacionais
    });
});


app.get("/servicos", function(req,res){

    // ARRAY DE OBJETO
    const servicos = [
        {servico:"Desenvolvimento de websites", 
        descricao: "Criação de sites com Node.js e integração a banco de dados", 
        preco: 3500},
        {servico:"Auditoria de UX/UI", 
        descricao: "Avaliação da usabilidade de sistemas com sugestões de melhora", 
        preco: 1800},
        {servico:"Infraestrututa em nuvem", 
        descricao: "Configuração de serviços e hospedagem de aplicações", 
        preco: 2900},
        {servico:"Chatbot com IA", 
        descricao: "Desenvolvimento de chatbot para atendimento automático", 
        preco: 2750},
    ]

    res.render("servicos",{
        //Enviando o array de objeto para pagina
        servicos : servicos
    });
});

// INICIANDO O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, (error) => {
    if (error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else{
        console.log(`Servidor iniciado com sucesso na porta no endereço: http://localhost:${port}`);
    }
});

// node index.js 

