import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Viagens = connection.define("viagens", {
    destino: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


// Viagens.sync({force:false});
export default Viagens;
