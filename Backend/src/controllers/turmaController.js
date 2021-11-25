const express = require('express');
const Turma = require('../models/turma');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const turma = await Turma.create(req.body);

        await turma.save();

        return res.send({ turma });
    }catch(err){
        return res.status(400).send({ error: '_Não foi possível adicionar a turma_' });
    }
});

router.put('/:turmaId', async (req, res) => {
    try{
        const turma = await Turma.findByIdAndUpdate({'_id': req.params.id.turmaId}, req.body, {new: true});

        return res.send({ turma });
    }catch (err){
        return res.status(500).send({ error: '_Não foi possível atualizar esta pessoa_' });
    }
});

router.delete('/:turmaId', async (req, res) => {
    try{
        await Turma.findByIdAndRemove(req.params.turmaId);

        return res.send();
    }catch(err){
        return res.status(500).send({ error: '_Não foi possível excluir esta pessoa_' });
    }
});

router.get('/', async (req, res) => {
    try{
        const turma = await Turma.find();

        return res.send({ turma });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

router.get('/:turmaId', async (req, res) => {
    try{
        const turma = await Turma.findById(req.params.turmaId);
        return res.send({ turma });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

module.exports = app => app.use('/turma', router);
