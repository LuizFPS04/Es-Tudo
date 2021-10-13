const mongoose = require('../database');

const TurmaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },

    periodo: {
        type: String,
        required: true
    },

    curso: {
        type: String,
        required: true
    }
});

const Turma = mongoose.model('Turma', TurmaSchema);

module.exports = Turma;