const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: ' _No token provided_' });

    const parts = authHeader.split(' ');

    if(!parts.lenght === 2)
        return res.status(401).send({error: ' _Token error_' });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: ' _Token malformatted_' });

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({error: ' _Token invalid_' });

        req.loginId = decoded.id;
        return next();
    })
};