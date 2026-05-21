import express from "express";
const router = express.Router();
 
router.get("/internacional", function(req, res) {
const destinosInternacionais = [
    { 
        nome: "Paris", 
        local: "Paris - França", 
        regiao: "Europa", 
        img: "../imgs/paris.webp",
        descricao: "A Cidade Luz: arte no Louvre, charmes da Torre Eiffel e cafés em Montmartre.",
        estrelas: 5
    },
    { 
        nome: "Tóquio", 
        local: "Tóquio - Japão", 
        regiao: "Ásia", 
        img: "../imgs/toquio.webp",
        descricao: "O contraste perfeito entre templos milenares e o futurismo de Shibuya.",
        estrelas: 5
    },
    { 
        nome: "Roma", 
        local: "Roma - Itália", 
        regiao: "Europa", 
        img: "../imgs/roma.jpg",
        descricao: "Um museu a céu aberto: do Coliseu às massas autênticas do Trastevere.",
        estrelas: 5
    },
    { 
        nome: "Nova York", 
        local: "Nova York - EUA", 
        regiao: "América do Norte", 
        img: "../imgs/nova-york.jpg",
        descricao: "A energia da Times Square, o Central Park e os espetáculos da Broadway.",
        estrelas: 4 
    },
    { 
        nome: "Barcelona", 
        local: "Barcelona - Espanha", 
        regiao: "Europa", 
        img: "../imgs/barcelona.jpg",
        descricao: "A arquitetura de Gaudí, as ruelas do Bairro Gótico e a energia da Barceloneta.",
        estrelas: 4
    },
    { 
        nome: "Maldivas", 
        local: "Malé - Maldivas", 
        regiao: "Ásia", 
        img: "../imgs/maldivas.avif",
        descricao: "Bangalôs sobre águas turquesas e recifes de corais em um dos cenários mais paradisíacos do oceano Índico.",
        estrelas: 5
    },
    { 
        nome: "Santorini", 
        local: "Santorini - Grécia", 
        regiao: "Europa", 
        img: "../imgs/santorini.jpg",
        descricao: "Casas brancas com cúpulas azuis debruçadas sobre o mar Egeu e o pôr do sol mais famoso do mundo.", 
        estrelas: 5
    },
    { 
        nome: "Zermatt", 
        local: "Zermatt - Suíça", 
        regiao: "Europa", 
        img: "../imgs/zermatt.webp",
        descricao: "Aos pés da montanha Matterhorn, um destino de esqui e vilas alpinas sem carros.",
        estrelas: 5
    },
    { 
        nome: "Queenstown", 
        local: "Queenstown - Nova Zelândia", 
        regiao: "Oceania", 
        img: "../imgs/queenstown.jpg",
        descricao: "A capital mundial da aventura: bungy jumping, jet boat e montanhas dignas de cinema.", 
        estrelas: 4
    },
    { 
        nome: "Machu Picchu", 
        local: "Cusco - Peru", 
        regiao: "América do Sul", 
        img: "../imgs/machupicchu.webp",
        descricao: "A cidade perdida dos Incas, com paisagens sagradas nos Andes.",
        estrelas: 5
    },
    { 
        nome: "Cairo",
        local: "Cairo - Egito", 
        regiao: "África", 
        img: "../imgs/cairo.webp",
        descricao: "A cidade dos Faraós, com pirâmides e templos históricos.",
        estrelas: 3
    },
    { 
        nome: "Hollywood", 
        local: "Los Angeles - EUA", 
        regiao: "América do Norte", 
        img: "../imgs/hollywood.jpg",
        descricao: "O epicentro do cinema mundial: caminhe pela Calçada da Fama, veja o letreiro icônico e explore os estúdios da Warner e Universal." ,
        estrelas: 3
    },
    { 
        nome: "Londres", 
        local: "Londres - Inglaterra", 
        regiao: "Europa", 
        img: "../imgs/londres.webp",
        descricao: "História real, museus incríveis e o icônico Big Ben sobre o Rio Tâmisa.", 
        estrelas: 4
    },
    { 
        nome: "Atenas", 
        local: "Atenas - Grécia", 
        regiao: "Europa", 
        img: "../imgs/atenas.avif",
        descricao: "O berço da civilização ocidental, com a Acrópole vigiando a cidade moderna.", 
        estrelas: 3
    },
    { 
        nome: "Orlando", 
        local: "Flórida - EUA", 
        regiao: "América do Norte", 
        img: "../imgs/orlando.jpg",
        descricao: "Onde a magia acontece: parques temáticos da Disney e Universal, diversão garantida para todas as idades.", 
        estrelas: 4
    },
    { 
        nome: "Punta Cana", 
        local: "Punta Cana - Rep. Dominicana", 
        regiao: "Caribe", 
        img: "../imgs/punta_cana.webp",
        descricao: "Onde o Atlântico encontra o Caribe: resorts de luxo, coqueirais infinitos e águas mornas.", 
        estrelas: 4
    },
    { 
        nome: "Ilhas Seychelles", 
        local: "Victoria - Seychelles", 
        regiao: "África", 
        img: "../imgs/ilha_seychelles.jpg",
        descricao: "Exclusividade no Índico: praias emolduradas por pedras de granito gigantes e águas cristalinas.", 
        estrelas: 5
    },
    { 
        nome: "Dubai", 
        local: "Dubai - Emirados Árabes", 
        regiao: "Oriente Médio", 
        img: "../imgs/dubai.jpg",
        descricao: "O luxo do futuro: prédios que tocam o céu e safaris no deserto dourado.", 
        estrelas: 4
    },
    { 
        nome: "Amsterdã", 
        local: "Amsterdã - Holanda", 
        regiao: "Europa", 
        img: "../imgs/amsterdam.jpg",
        descricao: "Canais charmosos, cultura das bicicletas e museus de classe mundial.", 
        estrelas: 4
    },
    { 
        nome: "Cartagena", 
        local: "Cartagena - Colômbia", 
        regiao: "América do Sul", 
        img: "../imgs/cartagena.jpg",
        descricao: "Muralhas históricas, cores vibrantes e o calor do Caribe Colombiano.", 
        estrelas: 4
    },
    { 
        nome: "Banff", 
        local: "Alberta - Canadá", 
        regiao: "América do Norte", 
        img: "../imgs/banff.jpg",
        descricao: "Lagos de um azul impossível cercados pelas imponentes Montanhas Rochosas canadenses.", 
        estrelas: 4
    },
    { 
        nome: "Bariloche", 
        local: "Bariloche - Argentina", 
        regiao: "América do Sul", 
        img: "../imgs/bariloche.webp",
        descricao: "O refúgio na Patagônia: montanhas nevadas, lagos azuis e o melhor chocolate artesanal do continente.",
        estrelas: 4
    },
    { 
        nome: "Seul", 
        local: "Seul - Coreia do Sul", 
        regiao: "Ásia", 
        img: "../imgs/seul.webp",
        descricao: "Onde o K-pop encontra a tradição: palácios imperiais, tecnologia de ponta e uma culinária de rua vibrante.", 
        estrelas: 4
    },
    { 
        nome: "Cancún", 
        local: "Quintana Roo - México", 
        regiao: "Caribe", 
        img: "../imgs/cancun.jpg",
        descricao: "Mar azul-turquesa, vida noturna agitada e a proximidade com as fascinantes ruínas maias de Chichén Itzá.", 
        estrelas: 4
    },
    { 
        nome: "Las Vegas", 
        local: "Nevada - EUA", 
        regiao: "América do Norte", 
        img: "../imgs/lasvegas.jpg",
        descricao: "A capital mundial do entretenimento: luzes de neon, cassinos monumentais e shows espetaculares na Strip.", 
        estrelas: 4
    },
    { 
        nome: "Singapura", 
        local: "Cidade de Singapura - Singapura", 
        regiao: "Ásia", 
        img: "../imgs/singapura.avif",
        descricao: "O futuro é aqui: jardins verticais gigantes, arquitetura ousada e uma limpeza impecável.", 
        estrelas: 5
    },
    { 
        nome: "Lapônia", 
        local: "Rovaniemi - Finlândia", 
        regiao: "Europa", 
        img: "../imgs/laponia.webp",
        descricao: "A terra do Papai Noel: durma em iglus de vidro sob a Aurora Boreal e faça passeios com renas na neve.", 
        estrelas: 5
    },
    { 
        nome: "Wadi Rum", 
        local: "Wadi Rum - Jordânia", 
        regiao: "Oriente Médio", 
        img: "../imgs/wadi.jpg",
        descricao: "O Vale da Lua: um deserto de areia vermelha e formações rochosas que parecem de outro planeta.", 
        estrelas: 3
    }
]

    res.render("destinosInternacional", {
        paginaAtiva: "internacional",
        titulo: "Descubra os Melhores Destinos do Mundo",
        listaInter: destinosInternacionais
    });
});

export default router;