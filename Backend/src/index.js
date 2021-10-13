const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

const app = express();
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/pessoaController')(app);
require('./controllers/turmaController')(app);
require('./controllers/formularioController')(app);
require('./controllers/loginController')(app);
require('./controllers/tipoController')(app);

app.listen(3333);