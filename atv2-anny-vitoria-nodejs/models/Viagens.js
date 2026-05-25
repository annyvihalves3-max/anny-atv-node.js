import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Viagens = connection.define("viagens", {
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: true, // só preenchido se internacional
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: true, // só preenchido se nacional
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    tags: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: true, 
    }
});

// Viagens.sync({ force: false }); 

export default Viagens;