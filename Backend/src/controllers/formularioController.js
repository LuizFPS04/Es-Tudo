const express = require('express');
const Formulario = require('../models/formulario');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        // const turma_id = req.body.turma_id
        const formulario = await Formulario.create(req.body);

        await formulario.save();

        return res.send({ formulario });
    }catch(err){
        return res.status(400).send({ error: '_Não foi possível adicionar esta pessoa_' });
    }
});

router.put('/:formularioId', async (req, res) => {
    try{
        const formulario = await formulario.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true});

        return res.send({ formulario });
    }catch (err){
        return res.status(500).send({ error: '_Não foi possível atualizar esta pessoa_' });
    }
});

router.delete('/:formularioId', async (req, res) => {
    try{
        await Formulario.findByIdAndRemove(req.params.formularioId);

        return res.send();
    }catch(err){
        return res.status(500).send({ error: '_Não foi possível excluir esta pessoa_' });
    }
});

router.get('/', async (req, res) => {
    try{
        const formulario = await Formulario.find();

        return res.send({ formulario });
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

router.get('/:formularioID', async (req, res) => {
    try{
        const formulario = await Formulario.findById(req.params.formularioId);
        
        return res.send({ formulario});
    }catch(err){
        return res.status(500).send({ error: '_Erro no carregamento_' });
    }
});

module.exports = app => app.use('/formulario', router);