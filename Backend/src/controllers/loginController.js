const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Login = require('../models/login');
const authConfig = require('../config/auth.json')

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
};

router.post('/register', async (req, res) => {
    const { cpf } = req.body;

    try {
        if(await Login.findOne({ cpf }))
            return  res.status(400).send({ error: '_User already exists_' });

        const login = await Login.create(req.body);

        return res.send({ cpf, token: generateToken({ id: login.id }), });

    }catch (err){
        return res.status(400).send({ error: '_Registration failed_' })
    }
});

router.post('/authenticate', async (req, res) => {
    const { cpf, senha } = req.body;

    const login = await Login.findOne({ cpf }).select('+senha');

    if (!login)
        return res.status(400). send({ error: 'Login não encontrado'});
    if (!await bcrypt.compare(senha, login.senha))
    return res.status(400). send({ error: 'Senha inválida'});

    login.senha = undefined;

    res.send({ 
        login, 
        token: generateToken({ id: login.id }) 
    });
});

router.get('/', async (req, res) => {
    try{
        const login = await Login.find();
        
        return res.send({ login});
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

// const router = express.Router();
// router.use(authMiddleware);

// router.get('/', (req, res) => {
//     res.send({ ok: true , login: req.loginId});
// });

// router.post('/', async (req, res) => {
//     try{
//         // const turma_id = req.body.turma_id
//         const login = await Login.create(req.body);

//         await login.save();

//         return res.send({ login });
//     }catch(err){
//         return res.status(400).send({ error: '_Não foi possível adicionar esta pessoa_' });
//     }
// });

// router.put('/:loginId', async (req, res) => {
//     try{
//         const login = await Login.findByIdAndUpdate({'_id': req.params.id.loginId}, req.body, {new: true});

//         return res.send({ login });
//     }catch (err){
//         return res.status(500).send({ error: '_Não foi possível atualizar esta pessoa_' });
//     }
// });

// router.delete('/:loginId', async (req, res) => {
//     try{
//         await Login.findByIdAndRemove(req.params.loginId);

//         return res.send();
//     }catch(err){
//         return res.status(500).send({ error: '_Não foi possível excluir esta pessoa_' });
//     }
// });

// router.get('/', async (req, res) => {
//     try{
//         const login = await Login.find();

//         return res.send({ login });
//     }catch(err){
//         return res.status(500).send({ error: '_Erro no carregamento_' });
//     }
// });

// router.get('/:loginId', async (req, res) => {
//     try{
//         const login = await Login.findById(req.params.loginId);
        
//         return res.send({ login});
//     }catch(err){
//         return res.status(500).send({ error: '_Erro no carregamento_' });
//     }
// });

module.exports = app => app.use('/login', router);