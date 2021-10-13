const mongoose = require('../database');

const FormularioSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },

    pergunta_resposta: {
        type: Object,
        required: true
    },

    cpf: {
        type: String,
        unique: true,
        required: true
    },

    data_resposta: {
        type: String,
        required: true
    }
});


const Formulario = mongoose.model('Formulario', FormularioSchema);

module.exports = Formulario;