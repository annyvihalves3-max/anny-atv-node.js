import express from "express";
const router = express.Router();

router.get("/perfil", function(req, res) {
    // 1. Criamos a lista de destinos que aparecerão no Perfil
    const roteirosFavoritos = [
        {
            id: 1,
            nome: "Fernando de Noronha",
            descricao: "Roteiro Sol & Mar completo",
            img: "../imgs/fernando-de-noronha.jpg", 
        },
        {
            id: 2,
            nome: "Orlando",
            descricao: "Romantismo e Gastronomia",
            img: "../imgs/orlando.jpg",
        },
        {
            id: 3,
            nome: "Maldivas",
            descricao: "Romantismo e Gastronomia",
            img: "../imgs/maldivas.avif",
        },
        {
            id: 4,
            nome: "Chapada Diamantina",
            descricao: "Aventura e Natureza Pura",
            img: "../imgs/chapada.jpg",
        }
    ];

    // 2. Renderizamos a página 'perfil.ejs' enviando os dados
    res.render("perfil", {
        titulo: "Meu Perfil - seuRoteiro",
        paginaAtiva: "perfil",
        usuario: {
            nome: "Lucas Martins",
            nivel: "Explorador Bronze"
        },
        roteiros: roteirosFavoritos // Esta é a variável que o EJS vai usar no loop
    });
});

export default router;