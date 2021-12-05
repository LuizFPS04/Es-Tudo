const express = require('express');
const Login = require('../models/login');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        // const turma_id = req.body.turma_id
        const login = await Login.create(req.body);

        await login.save();

        return res.send({ login });
    }catch(err){
        return res.status(400).send({ error: '_Não foi possível adicionar esta pessoa_' });
    }
});

router.put('/:loginId', async (req, res) => {
    try{
        const login = await Login.findByIdAndUpdate({'_id': req.params.id.loginId}, req.body, {new: true});

        return res.send({ login });
    }catch (err){
        return res.status(500).send({ error: '_Não foi possível atualizar esta pessoa_' });
    }
});

router.delete('/:loginId', async (req, res) => {
    try{
        await Login.findByIdAndRemove(req.params.loginId);

        return res.send();
    }catch(err){
        return res.status(500).send({ error: '_Não foi possível excluir esta pessoa_' });
    }
});

router.get('/', async (req, res) => {
    try{
        const login = await Login.find();

        return res.send({ login });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

router.get('/:loginId', async (req, res) => {
    try{
        const login = await Login.findById(req.params.loginId);
        
        return res.send({ login});
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

module.exports = app => app.use('/login', router);
