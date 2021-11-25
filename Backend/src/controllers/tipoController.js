const express = require('express');
const Tipo_Pessoa = require('../models/tipo_pessoa');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        // const turma_id = req.body.turma_id
        const tipo_pessoa = await Tipo_Pessoa.create(req.body);

        await tipo_pessoa.save();

        return res.send({ tipo_pessoa });
    }catch(err){
        return res.status(400).send({ error: '_Não foi possível adicionar esta pessoa_' });
    }
});

router.put('/:tipo_pessoaId', async (req, res) => {
    try{
        const tipo_pessoa = await Tipo_Pessoa.findByIdAndUpdate({'_id': req.params.id.tipo_pessoaId}, req.body, {new: true});

        return res.send({ tipo_pessoa });
    }catch (err){
        return res.status(500).send({ error: '_Não foi possível atualizar esta pessoa_' });
    }
});

router.delete('/:tipo_pessoaId', async (req, res) => {
    try{
        await Tipo_Pessoa.findByIdAndRemove(req.params.tipo_pessoaId);

        return res.send();
    }catch(err){
        return res.status(500).send({ error: '_Não foi possível excluir esta pessoa_' });
    }
});

router.get('/', async (req, res) => {
    try{
        const tipo_pessoa = await Tipo_Pessoa.find();

        return res.send({ tipo_pessoa });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

router.get('/:tipo_pessoaId', async (req, res) => {
    try{
        const tipo_pessoa = await Tipo_Pessoa.findById(req.params.tipo_pessoaId);
        
        return res.send({ tipo_pessoa});
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

module.exports = app => app.use('/tipo_pessoa', router);
