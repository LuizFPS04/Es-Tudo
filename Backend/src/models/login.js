const mongoose = require('../database');
const bcrypt =  require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    cpf: {
        type: String,
        unique: true,
        required: true
    },

    senha: {
        type: String,
        required: true,
        select: false,
    }
});

LoginSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;