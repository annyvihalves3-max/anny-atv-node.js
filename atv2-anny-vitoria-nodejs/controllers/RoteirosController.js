import express from "express";
const router = express.Router();

// Rota para a página de Roteiros
router.get("/roteiros", function(req, res) {
    
    const roteirosNacionais = [
        { 
            nome: "Fernando de Noronha", 
            local: "Pernambuco - Brasil", 
            img: "../imgs/paisagem.jpg",
            dia1: "Chegada, check-in na pousada e pôr do sol no Forte do Boldró.",
            dia2: "Ilha Tour completa: visita à Baía do Sancho e Mergulho no Sueste.",
            dia3: "Trilha do Atalaia e tarde livre na Praia da Cacimba do Padre.",
            tipo: "nacional"
        },
        { 
            nome: "Rio de Janeiro", 
            local: "Rio de Janeiro - Brasil", 
            img: "../imgs/rio-janeiro.jpg",
            dia1: "Manhã no Cristo Redentor e tarde no Pão de Açúcar.",
            dia2: "Caminhada em Copacabana e pôr do sol no Arpoador.",
            dia3: "Visita ao Jardim Botânico e almoço na Lagoa Rodrigo de Freitas.",
            tipo: "nacional"
        },
        { 
    nome: "Bonito", 
    local: "Mato Grosso do Sul - Brasil", 
    img: "bonito.jpg",
    dia1: "Flutuação no Rio Sucuri e visita à Gruta do Lago Azul.",
    dia2: "Passeio de bote no Rio Formoso e trilha das cachoeiras.",
    dia3: "Abismo Anhumas ou relax nas águas do Balneário Municipal.",
    tipo: "nacional"
},
{ 
    nome: "Paraty", 
    local: "Rio de Janeiro - Brasil", 
    img: "paraty.jpg",
    dia1: "Passeio pelo Centro Histórico e jantar em casarões coloniais.",
    dia2: "Escuna pelas ilhas da Baía de Paraty e mergulho em águas rasas.",
    dia3: "Cachoeiras da Estrada Real e visita ao Alambique Engenho D'Ouro.",
    tipo: "nacional"
}
    ];

    const roteirosInternacionais = [
        { 
            nome: "Paris", 
            local: "Paris - França", 
            img: "../imgs/paris.webp",
            dia1: "Torre Eiffel pela manhã e Cruzeiro pelo Rio Sena ao entardecer.",
            dia2: "Museu do Louvre e caminhada pela avenida Champs-Élysées.",
            dia3: "Bairro de Montmartre, Basílica de Sacré-Cœur e Arco do Triunfo.",
            tipo: "internacional"
        },
        { 
            nome: "Tóquio", 
            local: "Tóquio - Japão", 
            img: "../imgs/toquio.webp",
            dia1: "Cruzamento de Shibuya e visita ao Templo Meiji.",
            dia2: "Exploração tecnológica em Akihabara e subida na Tokyo Skytree.",
            dia3: "Mercado de peixes de Tsukiji e compras em Ginza.",
            tipo: "internacional"
        },
        { 
    nome: "Barcelona", 
    local: "Catalunha - Espanha", 
    img: "barcelona.jpg",
    dia1: "Sagrada Família e caminhada pelo Bairro Gótico.",
    dia2: "Parque Güell e as cores da Casa Batlló de Gaudí.",
    dia3: "Praia de Barceloneta e pôr do sol em Montjuïc.",
    tipo: "internacional"
},
{ 
    nome: "Nova York", 
    local: "Nova York - EUA", 
    img: "nova-york.jpg",
    dia1: "Times Square, Central Park e topo do Rockefeller Center.",
    dia2: "Estátua da Liberdade e travessia da Ponte do Brooklyn.",
    dia3: "Museu do Amanhã (9/11 Memorial) e compras na 5ª Avenida.",
    tipo: "internacional"
}
    ];

    // Enviando os dois arrays separados para a View
    res.render("roteiros", { 
        paginaAtiva: "roteiros",
        titulo: "Planeje sua Próxima Aventura", 
        listaNacional: roteirosNacionais,
        listaInternacional: roteirosInternacionais
    });
});

export default router;