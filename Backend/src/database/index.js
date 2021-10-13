// Conectando com o MongoDB:

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-mongo', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;