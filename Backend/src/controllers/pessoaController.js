const express = require('express');
const Pessoa = require('../models/pessoa');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        // const turma_id = req.body.turma_id
        const pessoa = await Pessoa.create(req.body);

        await pessoa.save();

        return res.send({ pessoa });
    }catch(err){
        return res.status(400).send({ error: '_Não foi possível adicionar esta pessoa_' });
    }
});

router.put('/:pessoaId', async (req, res) => {
    try{
        const pessoa = await Pessoa.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true});

        return res.send({ pessoa });
    }catch (err){
        return res.status(500).send({ error: '_Não foi possível atualizar esta pessoa_' });
    }
});

router.delete('/:pessoaId', async (req, res) => {
    try{
        await Pessoa.findByIdAndRemove(req.params.pessoaId);

        return res.send();
    }catch(err){
        return res.status(500).send({ error: '_Não foi possível excluir esta pessoa_' });
    }
});

router.get('/', async (req, res) => {
    try{
        const pessoa = await Pessoa.find().populate('turma', 'formulario_id', 'tipo_pessoa_id', 'login_id');

        return res.send({ pessoa });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

router.get('/:pessoaID', async (req, res) => {
    try{
        const pessoa = await Pessoa.findById(req.params.pessoaId).populate('turma', 'formulario_id', 'tipo_pessoa_id', 'login_id');

        return res.send({ pessoa });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

module.exports = app => app.use('/pessoa', router);