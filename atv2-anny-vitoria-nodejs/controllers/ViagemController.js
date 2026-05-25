import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import Viagens from "../models/Viagens.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/uploads/"));
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, unique + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png|webp/;
        allowed.test(path.extname(file.originalname).toLowerCase())
            ? cb(null, true)
            : cb(new Error("Formato inválido"));
    }
});

// GET - formulário de cadastro
router.get("/cadastrarViagens", (req, res) => {
    res.render("cadastrarViagens");
});

// POST - salvar cadastro
router.post("/cadastrarViagens", upload.single("imagem"), async (req, res) => {
    try {
        const { tipo, pais, estado, cidade, nome, descricao, tags, avaliacao } = req.body;
        const imagem = req.file ? "/uploads/" + req.file.filename : null;

        await Viagens.create({
            tipo,
            pais: pais || null,
            estado: estado || null,
            cidade,
            nome,
            descricao,
            tags,
            avaliacao,
            imagem
        });

        res.redirect("/perfil");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao salvar viagem");
    }
});

// GET - página de edição
router.get("/editarViagem/:id", async (req, res) => {
    const viagem = await Viagens.findByPk(req.params.id);
    if (!viagem) return res.redirect("/perfil");
    res.render("editarViagens", { viagem });
});

// POST - salvar edição
router.post("/editarViagem/:id", upload.single("imagem"), async (req, res) => {
    try {
        const viagem = await Viagens.findByPk(req.params.id);
        if (!viagem) return res.redirect("/perfil");

        const { tipo, pais, estado, cidade, nome, descricao, tags, avaliacao } = req.body;
        const imagem = req.file ? "/uploads/" + req.file.filename : viagem.imagem;

        await viagem.update({
            tipo,
            pais: pais || null,
            estado: estado || null,
            cidade,
            nome,
            descricao,
            tags,
            avaliacao,
            imagem
        });

        res.redirect("/perfil");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao editar viagem");
    }
});

router.post("/excluirViagem/:id", async (req, res) => {
    console.log("Rota excluir chamada! ID:", req.params.id); // ← adicione isso
    try {
        await Viagens.destroy({ where: { id: req.params.id } });
        res.redirect("/perfil");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao excluir viagem");
    }
});

export default router;