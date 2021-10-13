const mongoose = require('../database');

const PessoaSchema = new mongoose.Schema({
    cpf: {
        type: String,
        unique: true,
        required: true
    },

    ra: {
        type: String,
        unique: true,
        required: true
    },
    
    nome: {
        type: String, 
        required: true
    },

    genero: {
        type: String,
        required: true
    },

    data_nascimento: {
        type: String, 
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    telefone: {
        type: String,
        unique: true,
        required: true
    },

    turma: [{
        ano: String, 
        turma_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Turma'
        }
    }],

    formulario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Formulario'
    },

    tipo_pessoa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo_Pessoa',
        required: true
    },

    login_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Login',
        required: true
    }
});

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports = Pessoa;