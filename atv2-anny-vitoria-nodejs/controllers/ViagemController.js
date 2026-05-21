import express from "express";

const router = express.Router();

router.get("/cadastrarViagens", (req,res) => {

    res.render("cadastrarViagens")
})

export default router;