import express from "express";
import Viagens from "../models/Viagens.js";

const router = express.Router();

router.get("/perfil", async (req, res) => {
    const roteirosFavoritos = [
        { id: 1, nome: "Rio de Janeiro", descricao: "Cultura, Praias e Paisagens Icônicas", img: "../imgs/rio-janeiro.jpg" },
        { id: 2, nome: "Orlando", descricao: "Magia, Diversão e Parques Temáticos", img: "../imgs/orlando.jpg" },
        { id: 3, nome: "Maldivas", descricao: "Paraíso Tropical e Luxo à Beira-Mar", img: "../imgs/maldivas.avif" },
        { id: 4, nome: "Chapada Diamantina", descricao: "Natureza, Trilhas e Cachoeiras Deslumbrantes", img: "../imgs/chapada.jpg" }
    ];

    const viagens = await Viagens.findAll();

    res.render("perfil", {
        titulo: "Meu Perfil - seuRoteiro",
        paginaAtiva: "perfil",
        usuario: { nome: "Lucas Martins", nivel: "Explorador Bronze" },
        roteiros: roteirosFavoritos,
        viagens // ✅ passa as viagens para o EJS
    });
});

export default router;