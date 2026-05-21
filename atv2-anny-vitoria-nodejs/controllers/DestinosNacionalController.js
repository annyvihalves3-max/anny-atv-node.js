import express from "express";
const router = express.Router();

// Destinos do Brasil
router.get("/nacional", function(req, res) {
const destinosNacionais = [
    { 
        nome: "Fernando de Noronha", 
        local: "Fernando de Noronha - PE", 
        regiao: "Nordeste", 
        img: "../imgs/paisagem.jpg",
        descricao: "Mergulho em águas cristalinas e as praias mais bonitas do mundo.",
        estrelas: 5
    },
    { 
        nome: "Ouro Preto", 
        local: "Ouro Preto - MG", 
        regiao: "Sudeste", 
        img: "../imgs/ouro_preto.png",
        descricao: "Relíquias do barroco mineiro, ladeiras históricas e gastronomia única.",
        estrelas: 3
    },
    { 
        nome: "Chapada Diamantina", 
        local: "Chapada Diamantina - BA", 
        regiao: "Nordeste", 
        img: "../imgs/chapada.jpg",
        descricao: "Cachoeiras gigantes, grutas azuladas e trilhas épicas no coração da Bahia.",
        estrelas: 5
    },
    { 
        nome: "Lençóis Maranhenses", 
        local: "Barreirinhas - MA", 
        regiao: "Nordeste", 
        img: "../imgs/lencois.png",
        descricao: "Um deserto de dunas infinitas com lagoas de água doce cristalina.", 
        estrelas: 5
    },
    { 
        nome: "Florianópolis", 
        local: "Florianópolis - SC", 
        regiao: "Sul", 
        img: "../imgs/floripa.jpg",
        descricao: "A Ilha da Magia: mix perfeito de surf, trilhas e vilas de pescadores.", 
        estrelas: 4
    },
    { 
        nome: "Rio de Janeiro", 
        local: "Rio de Janeiro - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/rio-janeiro.jpg",
        descricao: "A Cidade Maravilhosa: do Cristo Redentor às trilhas do Morro da Urca.", 
        estrelas: 5
    },
    { 
        nome: "Alter do Chão", 
        local: "Santarém - PA", 
        regiao: "Norte", 
        img: "../imgs/alter.jpg",
        descricao: "O 'Caribe Amazônico' com praias de rio que surgem na seca da floresta.", 
        estrelas: 5
    },
    { 
        nome: "Paraty", 
        local: "Paraty - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/paraty.jpg",
        descricao: "Casarões coloniais, barcos coloridos e o encontro da serra com o mar.", 
        estrelas: 5
    },
    { 
        nome: "Arraial do Cabo", 
        local: "Arraial do Cabo - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/arraial.jpg",
        descricao: "O 'Caribe Brasileiro': areias brancas e um mar azul impossível.", 
        estrelas: 4
    },
    { 
        nome: "Jalapão", 
        local: "Mateiros - TO", 
        regiao: "Norte", 
        img: "../imgs/jalapao.webp",
        descricao: "Fervedouros onde é impossível afundar e dunas de areia alaranjada.",
        estrelas: 4
    },
    { 
        nome: "Curitiba", 
        local: "Curitiba - PR", 
        regiao: "Sul", 
        img: "../imgs/curitiba.jpg",
        descricao: "Parques impecáveis, jardins botânicos e o charme do passeio de trem.", 
        estrelas: 3
    },
       { 
        nome: "Chapada dos Veadeiros", 
        local: "Alto Paraíso - GO", 
        regiao: "Centro-Oeste", 
        img: "../imgs/veadeiros.webp",
        descricao: "Canyons, cristais e cachoeiras místicas no cerrado brasileiro.", 
        estrelas: 5
    },
    { 
        nome: "Bento Gonçalves", 
        local: "Bento Gonçalves - RS", 
        regiao: "Sul", 
        img: "../imgs/bento.jpg",
        descricao: "O coração da Serra Gaúcha, famoso pelos vinhedos e cultura italiana.", 
        estrelas: 4
    },
    { 
        nome: "Ilha Grande", 
        local: "Angra dos Reis - RJ", 
        regiao: "Sudeste", 
        img: "../imgs/ilha_grande.jpg",
        descricao: "Santuário ecológico sem carros, repleto de trilhas e praias selvagens.", 
        estrelas: 4
    },
    { 
        nome: "Monte Roraima", 
        local: "Uiramutã - RR", 
        regiao: "Norte", 
        img: "../imgs/monte.avif",
        descricao: "Um dos pontos mais antigos da Terra, com paredões de 400m e mistérios.",
        estrelas: 5
    },
    { 
        nome: "Capitólio", 
        local: "Capitólio - MG", 
        regiao: "Sudeste", 
        img: "../imgs/capitolio.jpg",
        descricao: "O Mar de Minas: cânions imensos e águas esverdeadas de tirar o fôlego.", 
        estrelas: 4
    },
    { 
        nome: "Bonito", 
        local: "Bonito - MS", 
        regiao: "Centro-Oeste", 
        img: "../imgs/bonito.jpg",
        descricao: "Flutuação em rios transparentes e cavernas com lagos azuis profundos.", 
        estrelas: 5
    },
    { 
        nome: "Gramado", 
        local: "Gramado - RS", 
        regiao: "Sul", 
        img: "../imgs/gramado.jpg",
        descricao: "Arquitetura europeia, gastronomia serrana e o charme do inverno gaúcho.", 
        estrelas: 5
    },
    { 
        nome: "Pipa", 
        local: "Tibau do Sul - RN", 
        regiao: "Nordeste", 
        img: "../imgs/pipa.jpeg",
        descricao: "Falésias coloridas, golfinhos e uma vida noturna vibrante e charmosa.", 
        estrelas: 4
    },
    { 
        nome: "Nobres", 
        local: "Nobres - MT", 
        regiao: "Centro-Oeste", 
        img: "../imgs/nobres.jpg",
        descricao: "Rios de água azul turquesa repletos de peixes e aquários naturais.", 
        estrelas: 3
    },
    { 
        nome: "Ubatuba", 
        local: "Ubatuba - SP", 
        regiao: "Sudeste", 
        img: "../imgs/ubatuba.jpg",
        descricao: "Mais de 100 praias, ilhas paradisíacas e o melhor do surfe paulista.",
        estrelas: 4
    },
    { 
        nome: "São Miguel dos Milagres", 
        local: "Passo de Camaragibe - AL", 
        regiao: "Nordeste", 
        img: "../imgs/saomiguel.webp",
        descricao: "Piscinas naturais e praias desertas em uma rota ecológica preservada.", 
        estrelas: 5
    },
    { 
        nome: "Porto de Galinhas", 
        local: "Ipojuca - PE", 
        regiao: "Nordeste", 
        img: "../imgs/porto-galinha.jpg",
        descricao: "Piscinas naturais mornas e jangadas coloridas em um mar de tons azuis.", 
        estrelas: 5
    },
    { 
        nome: "Foz do Iguaçu", 
        local: "Foz do Iguaçu - PR", 
        regiao: "Sul", 
        img: "../imgs/foz.webp",
        descricao: "A força da natureza nas Cataratas e o espetáculo do Marco das Três Fronteiras.", 
        estrelas: 5
    },
    { 
        nome: "Jericoacoara", 
        local: "Jijoca de Jericoacoara - CE", 
        regiao: "Nordeste", 
        img: "../imgs/jeri.webp",
        descricao: "Redes na água, dunas gigantes e o pôr do sol mais famoso do Brasil.", 
        estrelas: 5
    },
    { 
        nome: "Ilhabela", 
        local: "Ilhabela - SP", 
        regiao: "Sudeste", 
        img: "../imgs/ilhabela.jpg",
        descricao: "A capital da vela: praias selvagens, dezenas de cachoeiras e trilhas na Mata Atlântica.", 
        estrelas: 4
    },
    { 
        nome: "Galinhos", 
        local: "Galinhos - RN", 
        regiao: "Nordeste", 
        img: "../imgs/galinhos.webp",
        descricao: "Uma península isolada com dunas, salinas e um pôr do sol inesquecível no farol.", 
        estrelas: 4
    },
    { 
        nome: "Cânion do Xingó", 
        local: "Canindé de São Francisco - SE", 
        regiao: "Nordeste", 
        img: "../imgs/canion.jpg",
        descricao: "Navegue pelo Rio São Francisco entre imensos paredões de rocha alaranjada.", 
        estrelas: 5
    }
]
    res.render("destinosNacional", {
        paginaAtiva: "nacional",
        titulo: "Descubra os Melhores Destinos do Brasil",
        lista: destinosNacionais
    });
});

export default router;