const mongoose = require('../database');

const tipoPessoaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },

    servidor: {
        type: Boolean,
        required: true
    },

    tipo: {
        type: String,
        required: true
    },
});

const Tipo_Pessoa = mongoose.model('Tipo_Pessoa', tipoPessoaSchema);

module.exports = Tipo_Pessoa;